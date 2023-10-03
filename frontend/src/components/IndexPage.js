/* LoginAsk.js */

import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import './IndexPage.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
import landing1 from "../assets/images/admin.jpg";
import landing2 from "../assets/images/employees.jpg";
import Header from './Header';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
const IndexPage = () => {

    const navigate = useNavigate();

    const adminLogin = () => {
        navigate("/admin/login")
    }

    const employeeLogin = () => {
        navigate("/login")
    }
    const HomeButton = () => <Link to = "/"><h2 className='text-white'>KarzaLo</h2></Link>
    return (
        <div>
            <Navbar homeButton={HomeButton}>        
                <a href="http://localhost:3000/" className='text-white'>Home</a>
                <a href="http://localhost:3000/register"  className='text-white'>Register</a>
                </Navbar>
            
            <Container className="container-center position-absolute top-50 start-50 translate-middle">
                <Card style={{ width: '60%', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)', margin:"10%", marginLeft:"5%" }}>
                <Card.Img variant="top" src={landing1} className="card-img-top" alt="Card image" />
                <Card.Body>
                    <Card.Title >Admin</Card.Title>
                    
                    <Button onClick={adminLogin} style={{width:"25%" }}>
                        Login
                    </Button>
                    
                </Card.Body>
                </Card>
                <Card style={{ width: '60%', boxShadow: '0 8px 16px rgba(0.2, 0, 0, 0.2)' }}>
                <Card.Img variant="top" src={landing2} className="card-img-top" alt="Card image" />
                <Card.Body>
                    <Card.Title>Employee</Card.Title>
                    
                    <Button onClick={employeeLogin} style={{width:"25%", fontSize:"15px" }} >
                        Login
                    </Button>
                </Card.Body>
                </Card>
        </Container>
        </div>
  );
};

export default IndexPage;