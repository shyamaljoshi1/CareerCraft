/*import { useState } from 'react'
import reactLogo from './assets/react.svg'



import Sidebar from  './Components/sidebar/Sidebar.jsx'
import Navbar from  './Components/Navbar.jsx'
import Dashboard from  './Components/Dashboard.jsx'

function App() {
  const [theme, setTheme]=useState('day');

 return (
  <div className="main">
    <div className="flex">
    <div className="navcontainer">
    <Navbar theme={theme} setTheme={setTheme}/>
    </div>
    <Sidebar/>
    <Dashboard/>
    </div>
   
    
    
/*
    <div className="container">
      <h1  className="title">Carrer Craft</h1>
      <p className="info">Carrer Craft is a website theta help people in carrer development .It created by students of iitj.
        Here we have resources to prepare for that specific carrer .</p>
      <button className="btn">Explore Now</button>

    </div>
    

  </div>
  
  )
}

export default App

*/


import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState('day');

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />

    </Routes>
  );
}

export default App;
