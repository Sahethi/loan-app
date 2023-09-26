import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router'

const AdminLogin=()=>{
    const [loginDetails,setLoginDetails]=useState({
        username: "",
        password:""
    })
    const navigate = useNavigate();
    // console.log("working1");
    const handleChange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setLoginDetails({...loginDetails,[name]:value});
        console.log(loginDetails);
    }

    const handleSubmitEvent = (e)=>{
        e.preventDefault();
        console.log(loginDetails);

        //validation
        if(loginDetails.username.trim()==="" || loginDetails.password.trim()===""){
            window.alert("username and passowrd is required");
            console.log("toast working");
            return;
        }else{
            loginAdmin(loginDetails).then((resp)=>{
                if(resp.data===loginDetails.username){
                    window.alert("admin logged in");
                    navigate("/AdminDashboard");
                } else{
                    window.alert(resp.data);
                }

                console.log(resp.data);
                console.log(loginDetails.username);
            }).catch((error)=>{
                console.log(error);
                if(error.response.status==400 || error.response.status==404){
                    window.alert(error.response.statusText);
                    restinput();
                }else{
                    window.alert("Server is not responding")
                }
            })
        }
    }

    const loginAdmin=()=>{
        return axios.post("http://localhost:8080/adminlogin",loginDetails).then((resp) => {
            console.log(resp);
            return resp;
    });
    }

    const restinput=()=>{
        setLoginDetails({
            username:"",
            password:""
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmitEvent}>
                <div>
                    <label htmlFor="username">Enter username</label>
                    <input name="username" type="text" id="username" placeholder ="admin@123" value={loginDetails.username} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Enter password</label>
                    <input name="password" type="password" id ="password" value={loginDetails.password} onChange={handleChange}/>
                </div>
                <Button  variant="outline-success" type="submit">Submit</Button>
                <button type="reset" onClick={restinput}>Reset</button>
            </form>
        </div>
    )
}

export default AdminLogin;
