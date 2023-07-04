import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CourseCard from './components/CourseCard';
import BookmarkButton from './components/BookmarkButton';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/courses" element={<Courses/>} />
          <Route exact path="/courses/:id" element={<CourseDetails/>} />
          <Route exact path="/bookmarkbutton" element={<BookmarkButton/>} />
          <Route exact path="/courseCard" element={<CourseCard/>} />
          <Route exact path="/footer" element={<Footer/>} />
          <Route exact path="/header" element={<Header/>} />


                    

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
