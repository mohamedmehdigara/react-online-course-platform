import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch courses for the initial page
    fetchCourses(currentPage);
  }, []);

  const fetchCourses = (page) => {
    setIsLoading(true);
    // Fetch course data from an API
    axios.get(`api/courses?page=${page}`).then((response) => {
      setCourses((prevCourses) => [...prevCourses, ...response.data]);
      setCurrentPage(page + 1);
      setIsLoading(false);
    });
  };

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Fetch more courses if not already loading
      if (!isLoading) {
        fetchCourses(currentPage);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Detach the scroll event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, isLoading]);

  const handleBookmark = (courseId) => {
    // Retrieve bookmarked courses from local storage
    const bookmarkedCourses = JSON.parse(localStorage.getItem('bookmarkedCourses')) || [];

    // Check if the course is already bookmarked
    const isBookmarked = bookmarkedCourses.includes(courseId);

    // Update bookmarked courses in local storage
    if (isBookmarked) {
      const updatedBookmarks = bookmarkedCourses.filter((id) => id !== courseId);
      localStorage.setItem('bookmarkedCourses', JSON.stringify(updatedBookmarks));
    } else {
      localStorage.setItem(
        'bookmarkedCourses',
        JSON.stringify([...bookmarkedCourses, courseId])
      );
    }
  };

  return (
    <div>
      <h1>Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
