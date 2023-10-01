import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
export default function AdminNavbar() {
    const handleLogout = () => {
        sessionStorage.removeItem('adminSessionId');
    }
    const HomeButton = () => <Link to = "/AdminDashboard"><h2 className='text-white'>KarzaLo</h2></Link>
  return (
    <div>

       <Navbar homeButton={HomeButton}>        
            <a href="http://localhost:3000/adminEmployee" className='text-white'>Manage Customers</a>
            <a href="http://localhost:3000/adminLoan"  className='text-white'>Manage Loans</a>
            <a href="http://localhost:3000/AdminItemDetails/" className='text-white'>Manage Items</a>       
            <a href="http://localhost:3000/admin/login" className='text-white' onClick={handleLogout}>Logout</a>
        </Navbar>
    </div>
  )
}
