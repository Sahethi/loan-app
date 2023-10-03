import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
export default function UserNavbar() {
    const handleLogout=()=>{
      sessionStorage.removeItem('sessionId');
      sessionStorage.removeItem('dept');
      sessionStorage.removeItem('designation');
    }
  const HomeButton = () => <Link to = "/UserDashboard"><h2 className='text-white'>KarzaLo</h2></Link>
  return (
    <Navbar homeButton={HomeButton}>
        <a href={`http://localhost:3000/loans/`+sessionStorage.getItem('sessionId')} className='text-white'>View Loans</a>
        <a href="http://localhost:3000/applyloan"  className='text-white'>Apply for Loans</a>
        <a href={`http://localhost:3000/items/`+sessionStorage.getItem('sessionId')} className='text-white'>View Items Purchased</a>       
        <a href="http://localhost:3000/login" className='text-white' onClick={handleLogout}>Logout</a>
    </Navbar>
  )
}
