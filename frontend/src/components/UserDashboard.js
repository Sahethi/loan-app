import React,{useState,useEffect} from 'react';
// import {useSpring,animated} from 'react-spring';
import './UserDashboard.css';
import ImgMoney from '../assets/images/img5.svg'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import UserNavbar from './UserNavbar';
function UserDashboard() {
  
  
  return (
    <div>
      <UserNavbar />
<div className='content-area'>
    </div>
      <div className='intro-container-1'>
      <img src = {ImgMoney} />
        <div>
          <h3 className='text-primary'>Hey {sessionStorage.getItem('sessionId')} !</h3>
          <h1>In need of a Loan?</h1>
          <h4> It's never been so simple!</h4>
          <Link to = "/applyloan"><button className='btn btn-lg btn-primary mt-2 text-sm'>Get Now!</button></Link>
        </div>
      </div>
    </div>
      
  );
}

export default UserDashboard;
