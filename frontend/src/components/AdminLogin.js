import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navigate, useNavigate} from 'react-router-dom';
import './adminLogin.css';


const AdminLogin = () => {
    const [loginDetails,setLoginDetails]=useState({
        username: "",
        password:""
    })
    const [formErrors, setformErrors] = useState({username:" ", password:" "});
    const [submit, isSubmit] = useState(false);

    const navigate =useNavigate();

    useEffect(() => {
        if(formErrors.username == "" && formErrors.password=="") {
            isSubmit(true);
        }
    }, [formErrors]);

    // console.log("working1");
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        if(name == "username"){
            if(value.length != 6){
                setformErrors({...formErrors, username:"Username must be exactly 6 characters long"});
            } else {
                setformErrors({...formErrors, username:""});
            }
        } else {
            if(value.length == 0) {
                setformErrors({...formErrors, password:"Please enter password"});
            } else{
                setformErrors({...formErrors, password:""});
            }
        }

        setLoginDetails({...loginDetails,[name]:value});
        console.log(loginDetails);
    }

    const handleSubmitEvent = (e)=>{
        e.preventDefault();
        console.log(loginDetails);

        
        //validation
        if(loginDetails.username.trim()==="" || loginDetails.password.trim()===""){
            // window.alert("Username and Passowrd is required");
            return;
        }else{
            loginAdmin(loginDetails).then((resp)=>{
                if(resp.data===loginDetails.username){
                    // window.alert("admin logged in");

                    navigate("/AdminDashboard");
                } else{
                    // window.alert(resp.data);
                    setformErrors(errors => {
                        return {
                            ...errors,
                            username: "Invalid username or password"
                        }
                    });
                    // isSubmit(false);
                }

                console.log(resp.data);
                console.log(loginDetails.username);
            }).catch((error)=>{
                console.log(error);
                if(error.response.status==400 || error.response.status==404){
                    // window.alert(error.response.statusText);
                    setformErrors(errors => {
                        return {
                            ...errors,
                            username: "Login failed"
                        }
                    });
                    isSubmit(false);
                    restinput();
                }else{
                    // window.alert("Server is not responding")
                    setformErrors(errors => {
                        return {
                            ...errors,
                            username: "Login failed"
                        }
                    });
                    isSubmit(false);
                }
            })
        
    }

    const loginAdmin=()=>{
        if(submit) {
            return axios.post("http://localhost:8080/adminlogin",loginDetails).then((resp) => {
                console.log(resp);
                return resp;
        });
        }
    }

    const restinput=()=>{
        setLoginDetails({
            username:"",
            password:""
        })
        setformErrors({
            username:" ",
            password:" "
        })
    }
    return (
        <div className='Container'>
            <div className='Row d-flex align-items-center justify-content-center outer'>
                <Col xs={5}>
                    <div className=" d-flex align-items-center justify-content-center w-100 wrapper ">
                        <div className="admin-login rounded m-5">
                            <Form onSubmit={handleSubmitEvent} className='m-4 bk'>
                                <h2>Sign In</h2>
                                <Form.Group className="m-3 mt-4" controlId="formBasicEmail">
                                    <Form.Label  htmlFor="username">Enter username</Form.Label>
                                    <Form.Control name="username" type="text" placeholder=" Admin@123" id="username" value={loginDetails.username} onChange={handleChange} />
                                    <span style={{color:"red"}}>{formErrors.username}</span>
                                </Form.Group>
                                <Form.Group className="m-3 mt-4" controlId="formBasicEmail">
                                    <Form.Label  htmlFor="password">Enter password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Enter password" id ="password" value={loginDetails.password} onChange={handleChange} />
                                    <span style={{color:"red"}}>{formErrors.password}</span>

                                </Form.Group>
                                    <Form.Group className="m-3 mt-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me"/>
                                </Form.Group>
                                <br />
                               

                                <Row className='align-items-center justify-content-center m-0'>
                                    <Col xs={4}>
                                        <Button  className='button-62' type="submit" disabled={!submit}>SIGN IN</Button>
                                    </Col>
                                    <Col xs={4}>
                                        <Button  className='button-62' type="reset" onClick={restinput}>RESET</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </div>
        </div>

       
        
    )
}
}
export default AdminLogin;
