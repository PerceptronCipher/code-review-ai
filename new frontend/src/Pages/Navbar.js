import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>minimals</h2>
      </div>
      
      {/* Navigation Links and Button */}
      <div className={`nav-content ${isOpen ? "show" : ""}`}>
        <div className="nav-links">
          <a href="#" onClick={closeMenu}>Features</a>
          <a href="#" onClick={closeMenu}>Docs</a>
          <a href="#" onClick={closeMenu}>Api</a>
          <a href="#" onClick={closeMenu}>Privacy</a>
        </div>
        <div className="nav-btn">
          <button onClick={closeMenu}>Upload Docs</button>
        </div>
      </div>

      {/* Hamburger Icon with dynamic "open" class */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;