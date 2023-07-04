import React from 'react';
import BookmarkButton from './BookmarkButton';

const CourseCard = ({ course, onBookmark }) => {
  const { id, title, instructor, rating } = course;

  const isBookmarked = JSON.parse(localStorage.getItem('bookmarkedCourses') || '[]').includes(
    id.toString()
  );

  const handleBookmark = (courseId) => {
    onBookmark(courseId);
  };

  return (
    <div className="course-card">
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Rating: {rating}</p>
      <BookmarkButton courseId={id} onBookmark={handleBookmark} isBookmarked={isBookmarked} />
    </div>
  );
};

export default CourseCard;
