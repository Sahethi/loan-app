import React from 'react'
import Navbar from './Navbar'
export default function UserNavbar() {
    const handleLogout=()=>{
      sessionStorage.removeItem('sessionId');
      sessionStorage.removeItem('dept');
      sessionStorage.removeItem('designation');
    }
  return (
    <Navbar>
        <a href={`http://localhost:3000/loans/`+sessionStorage.getItem('sessionId')} className='text-white'>View Loans</a>
        <a href="http://localhost:3000/applyloan"  className='text-white'>Apply for Loans</a>
        <a href={`http://localhost:3000/items/`+sessionStorage.getItem('sessionId')} className='text-white'>View Items Purchased</a>       
        <a href="http://localhost:3000/login" className='text-white' onClick={handleLogout}>Logout</a>
    </Navbar>
  )
}
