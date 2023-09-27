import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className = "custom-navbar bg-primary" >
      <Link to = "/UserDashboard"><h2 className='text-white'>KarzaLo</h2></Link>
      <div className='navbar-container'>
        {props.children}
        
      </div>
    </div>
  )
}
