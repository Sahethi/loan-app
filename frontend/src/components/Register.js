import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Register.css'
import { useNavigate } from 'react-router';
import { Toast, ToastBody, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Register() {
    const [userRegistration, setuserRegistration] = useState({
        first_name:"", //first_name
        last_name:"",// last_name
        home_add:"", //home_add
        email_id:"", //email_id
        phone_num:"", //phone_num
        username: "",
        password: "",
        employee_id:"",     
        dept:"", //dept
        designation:"",
        gender:"",
        dob:"",
        doj:""
    });

    const [error, setError] = useState({
        first_name:" ", //first_name
        last_name:" ",// last_name
        home_add:" ", //home_add
        email_id:" ", //email_id
        phone_num:" ", //phone_num
        password: " ",
        employee_id:" ",     
        dept:"", //dept
        designation:"",
        gender:"",
        dob:"Field cannot be blank",
        doj:"Field cannot be blank"
    });
    const [submit, isSubmit] = useState(false);

    //toast
    const [show,setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const navigate = useNavigate();
    const [loginRegistration, setLoginRegistration] = useState({
        username:"",
        password:""
    });

    // const deptOptions = ["Human Resources", "Accounting", "Technical", "Sales"];
    // const designationOptions = ["Manager", "Associate", "Support"];
    // const genderOptions=["Male","Female","Other"];

    async function sendToLogin(response1){
        try{
            const response = await axios.post(`http://localhost:8080/saveLogin`, {
                username: userRegistration.username,
                password: userRegistration.password
            }).then((response)=>{
                console.log(response.data);
            });
            setLoginRegistration(response1);
            console.log(response1); 
            navigate("/login")
        } catch (err) {
            console.log("Error:" + err);
        }
    }

 

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch(name) {
            case 'email_id':
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if(!emailRegex.test(value)){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid email"
                        }
                    });
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setuserRegistration({...userRegistration, [name] : value});

                return;
            case 'phone_num':
                if(value.length != 10 || !/^\d+$/.test(value)){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid 10-digit contact number"
                        }
                    });
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setuserRegistration({...userRegistration, [name] : value});

                return;
            case 'employee_id':
                if(value.length != 6){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid 6-digit employee id"
                        }
                    });
                    
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setuserRegistration({...userRegistration, [name] : value});
        setuserRegistration(cur =>({...cur, username : value}));


                return;
            case 'password':
                if(value.length < 8 || value.length > 16){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid password between 8 to 16 characters"
                        }
                    });
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setuserRegistration({...userRegistration, [name] : value});

                return;
                case 'doj':
                    console.log("doj");
                    if(!value.replace(/\s/g,'').length){
                        console.log("x");
                        setError(errors => {
                            return {
                                ...errors,
                                [name]: "Field cannot be blank"
                            }
                        });
                    }
                    else if (error.dob == "" ) {
                        const vb = new Date(userRegistration.dob).getTime();
                        const vj = new Date(value).getTime();
                        console.log("vb " + vb);
                        console.log("vj " + vj);
                        if(vj < vb) {
                            setError(errors => {
                                return {
                                    ...errors,
                                    dob: "",
                                    [name]: "Date of joining cannot be less than date of birth"
                                }
                            });
                        }
                        else {
                            setError(errors => {
                                return {
                                    ...errors,
                                    [name]: "",
                                    dob:""
                                }
                            });
                        }
                    }
                    else {
                        setError(errors => {
                            return {
                                ...errors,
                                [name]: ""
                            }
                        });
                    }
                    setuserRegistration({...userRegistration, [name] : value});

                return;
                case 'dob':
                    if(!value.replace(/\s/g,'').length){
                       
                        setError(errors => {
                            return {
                                ...errors,
                                [name]: "Field cannot be blank"
                            }
                        });
                    }
                    else if (error.doj == "" ) {
                        const vb = new Date(value).getTime();
                        const vj = new Date(userRegistration.doj).getTime();
                        console.log("vb " + vb);
                        console.log("vj " + vj);
                        if(vj < vb) {
                            setError(errors => {
                                return {
                                    ...errors,
                                    doj: "Date of joining cannot be less than date of birth",
                                    dob:""
                                }
                            });
                            
                        }
                        else {
                            setError(errors => {
                                return {
                                    ...errors,
                                    doj: "",
                                    dob:""
                                }
                            });
                            
                        }
                    }
                    else {
                        console.log("DOB sert");
                        setError(errors => {
                            return {
                                ...errors,
                                dob: "",
                                doj:""
                            }
                        });
                    }
                    setuserRegistration({...userRegistration, dob : value});

                return;
            default:
                if(!value.replace(/\s/g,'').length){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Field cannot be blank"
                        }
                    });
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
                
        }
               
        // console.log("hi");
        setuserRegistration({...userRegistration, [name] : value});

        // console.log(e.target.name);
        // console.log(e.target.value);
        console.log(userRegistration);
        if(e.target.name == 'employee_id'){
            setuserRegistration(cur =>({...cur, username : value}));
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        // console.log(userRegistration);
        // axios.post('http://localhost:8080/saveEmployee', {userRegistration}) 
        // .then(response => console.log(response))
        // .catch(err => console.log(err));
        let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Headers': '*',
            }
        }
        console.log(userRegistration);
        
        try {
            await axios.post("http://localhost:8080/saveEmployee", {
                ...userRegistration
            }, config).then((res) => {
                // alert("User Registered Successfully");
                if(res.status==404) {
                    setShow1(true);
                }
                else{
                    setShow(true);
                }
                // setTimeout(sendToLogin(res), 3000);
                console.log(res.data);
                
            }, fail => {
                setShow1(true);
                console.error(fail); // Error!
            });
        } catch (err) {
            setShow1(true);

            // alert(err);
        }   
    }

    useEffect(() => {
        let ans = true;
        Object.values(error).map((value,index) => {
            // const value = error.key;
            if(value != "") {
                ans = false;
                // console.log(index + ": " + value);
                // return;
            }
        });
        isSubmit(ans);
        
    }, [error]);


    return (
        <div className= "register-wrapper">
            <ToastContainer position='top-end' className='position-fixed'>
                <Toast bg='success' className='p-1' show={show} >
                    <ToastBody>
                        Registered successfully!
                    </ToastBody>
                </Toast>
            </ToastContainer>
            <ToastContainer position='top-end' className='position-fixed'>
                <Toast bg='danger' className='p-1' show={show1} >
                    <ToastBody>
                        User already exists.
                    </ToastBody>
                </Toast>
            </ToastContainer>
            
            <div className='register-form'>
            <h2 className='pb-3'>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="first_name" >First name:</label>
                    <input type="text" className = "form-control" name="first_name"  onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.first_name}</span>
                    <br/>
                </div>
                
                <div className='form-group'><label for="last_name" >Last name:</label>
                <input type="text" className = "form-control" name="last_name"  onChange={handleInput}/>
                <span style={{color:"red"}}>{error.last_name}</span>
                
                <br/></div>
                
                <div className='form-group'><label for="home_add">Home address:</label>
                <textarea name="home_add"className = "form-control" onChange={handleInput}/>
                <span style={{color:"red"}}>{error.home_add}</span>

                <br></br></div>
                
                <div className='form-group'>
                    <label for="email_id">Email:</label>
                    <input type="text" className = "form-control" onChange={handleInput} name="email_id"/>
                    <span style={{color:"red"}}>{error.email_id}</span>
                
                    <br></br>
                </div>
                
                <div className='form-group'><label for="phone_num">Contact Number:</label>
                <input type="number" className = "form-control" maxLength={10} minLength={10} name="phone_num" onChange={handleInput}/>
                <span style={{color:"red"}}>{error.phone_num}</span>
                
                <br></br></div>
                
                <div className='form-group'>
                <label for="employee_id">Employee ID:</label>
                <input type="text" className = "form-control" name="employee_id" onChange={handleInput}/>
                <span style={{color:"red"}}>{error.employee_id}</span>
                
                <br/>
                </div>
                
                <div className='form-group'>
                    <label for="password">Password:</label>
                    <input type="password" className = "form-control" name="password" onChange = {handleInput} />
                    <span style={{color:"red"}}>{error.password}</span>
                    
                    <br/>
                </div>               
               
                <div className='form-group'>
                    <label for="dept">Select department:</label>
                    <select name="dept" className = "form-control" onChange={handleInput}>
                        <option value="">Select</option>
                        <option value="sales">Sales</option>
                        <option value="hr">Human Resources</option>
                        <option value="accounting">Accounting</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>
                <span style={{color:"red"}}>{error.dept}</span>

                <br>
                </br>
                <div className='form-group'>
                    <label for="designation">Select Designation:</label>
                    <select className = "form-control" name="designation" onChange={handleInput}>
                        <option value="">Select</option>
                        <option value="manager">Manager</option>
                        <option value="associate">Associate</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <span style={{color:"red"}}>{error.designation}</span>

                <br>
                </br>
                <div className='form-group'>
                    <label for="gender">Select Gender:</label>
                    <select className = "form-control" name="gender" onChange={handleInput} defaultValue={"male"}>
                        <option value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                </div>
                <span style={{color:"red"}}>{error.gender}</span>

                <br></br>
                <div className='form-group'>
                <label for="dob">Date of Birth:</label>
                <input className = "form-control" type="date" name="dob" onChange={handleInput}/>
                <span style={{color:"red"}}>{error.dob}</span>

                <br></br>
                </div>
                <div className='form-group'>
                    <label for="doj">Date of Joining:</label>
                    <input className = "form-control" type="date" name="doj" onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.doj}</span>

                    <br></br>
                </div>
                
                <button type="submit" disabled = {!submit} className= "btn btn-primary d-block w-100">Submit</button>
            </form>
            <br></br>
            <p>Already a user? Click <Link to = "/login"><a style={{textDecoration:'none'}}>here</a></Link> to login</p>
            <br></br>
            </div>
            
        </div>
    )
}
