import React from 'react'
import Navbar from './Navbar'
export default function UserNavbar() {
  return (
    <Navbar>
        <a href={`http://localhost:3000/loans/`+sessionStorage.getItem('sessionId')} className='text-white'>View Loans</a>
        <a href="http://localhost:3000/applyloan"  className='text-white'>Apply for Loans</a>
        <a href={`http://localhost:3000/items/`+sessionStorage.getItem('sessionId')} className='text-white'>View Items Purchased</a>
    </Navbar>
  )
}
