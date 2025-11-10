import React from 'react';
import './Navbar.css';
import { Sun, Moon } from 'lucide-react'; // Assuming you have a theme toggle
import logo from '../../assets/logo.png';

// 1. Import 'Link' from react-router-dom
import { Link } from "react-router-dom"; 
// We don't need 'Routes' or 'Route' in this file, so they are removed.

function Navbar({ }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* 2. Make the logo link back to the homepage */}
        <Link to="/">
          <img src={logo} alt="Career Craft" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-center">
        <div className="nav-inner-center">
          {/* 3. Change all <a> tags to <Link> tags */}
          <Link to="/">Home</Link>
          
           
          
          {/* This is the new link you wanted */}
          <Link to="/experience">Experience</Link>
          
          {/* We can set this up for your future profile page */}
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      
      {/* I'm assuming your theme toggle UI is here */}
      {/* <div className="nav-right">
        <div onClick={toggle_mode} className="toggle-icon">
          <Sun />
        </div>
      </div>
      */}
    </nav>
  );
}

export default Navbar;