import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className = "custom-navbar bg-primary" >
      <Link to = "/UserDashboard"><h2 className='text-white'>KarzaLo</h2></Link>
      <div className='navbar-container'>
        <a href={`http://localhost:3000/loans/`+sessionStorage.getItem('sessionId')} className='text-white'>View Loans</a>
        <a href="http://localhost:3000/applyloan"  className='text-white'>Apply for Loans</a>
        <a href={`http://localhost:3000/items/`+sessionStorage.getItem('sessionId')} className='text-white'>View Items Purchased</a>
      </div>
    </div>
  )
}
