/*import React from "react"
import './Navbar.css'
import logo from '../assets/logo.png'
import day from '../assets/day.png'
import night from '../assets/night.png'

function Navbar (){
    // const toggle_mode=()=>{
        // theme=='day' ? setTheme('night'):setTheme('day')
    // }
    return (
        <div className='navbar'>
             <img src={logo} alt="" className='logo'/> 
            <ul>
                <a href="https://www.google.com/">Home</a>
                <a href="#">Products</a>
                <a href="#">Features</a>
                <a href="#">About</a>
            </ul>

            
        </div>
    )
}

export default Navbar;


*/

import './Navbar.css';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';
import Domain from './Domain.jsx'

import { Routes, Route } from "react-router-dom";
function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Career Craft" className="nav-logo" />
        <h2 className="nav-title">Career Craft</h2>
      </div>

      <div className="nav-center">
        <a href="#">Home</a>
        <a href="#">Domain
        </a>
        <a href="#">Experience</a>
        <a href="#">Profile</a>
      </div>

      {/*<div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
        >
          {theme === 'day' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'day' ? 'Dark' : 'Light'} Mode</span>
        </button>
      </div> */}
    </nav>
  );
}

export default Navbar;
