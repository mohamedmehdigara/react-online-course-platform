import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">Logo</div>

      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* Additional navigation links */}
        </ul>
      </nav>

      {/* User authentication */}
      <div className="user-authentication">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </header>
  );
};

export default Header;
