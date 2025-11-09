import React from "react"
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
