import React, { useState } from 'react';
import './Navbar.css';
import { Sun, Moon, LogOut, ChevronDown } from 'lucide-react'; // Assuming you have a theme toggle
import logo from '../../assets/logo.png';

// Import 'Link' and 'useNavigate' from react-router-dom
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/login');
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Make the logo link back to the homepage */}
        <Link to="/">
          <img src={logo} alt="Career Craft" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-center">
        <div className="nav-inner-center">
          {/* Navigation links */}
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      {/* Right side - Profile dropdown (only show when authenticated) */}
      <div className="nav-right">
        {isAuthenticated && user ? (
          <div className="profile-container">
            <button className="profile-button" onClick={toggleProfileMenu}>
              <span className="profile-username">{user.name}</span>
              <ChevronDown size={18} className={`chevron-icon ${showProfileMenu ? 'open' : ''}`} />
            </button>

            {/* Profile dropdown menu */}
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <p className="profile-name">{user.name}</p>
                  <p className="profile-email">{user.email}</p>
                </div>
                <div className="profile-divider"></div>
                <button className="logout-button" onClick={handleLogout}>
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="login-link">Login</Link>
            <Link to="/signup" className="signup-link">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Click outside to close menu */}
      {showProfileMenu && (
        <div 
          className="profile-menu-backdrop" 
          onClick={() => setShowProfileMenu(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;