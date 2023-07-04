import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div>Logo</div>

      {/* Navigation */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          {/* Additional navigation links */}
        </ul>
      </nav>

      {/* User authentication */}
      <div>User Authentication</div>
    </header>
  );
};

export default Header;
