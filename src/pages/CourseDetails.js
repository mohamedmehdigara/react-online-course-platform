import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from an API based on the courseId
    axios.get(`api/courses/${courseId}`).then((response) => {
      setCourse(response.data);
    });
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>Instructor: {course.instructor}</p>
      {/* Additional course details */}
    </div>
  );
};

export default CourseDetails;
