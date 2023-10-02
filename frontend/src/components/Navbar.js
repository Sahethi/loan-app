import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export default function Navbar({homeButton : HomeButton,...props}) {
  return (
    <div className = "custom-navbar bg-primary" >
      <HomeButton />
      <div className='navbar-container'>
        {props.children}
      </div>
    </div>
  )
}
