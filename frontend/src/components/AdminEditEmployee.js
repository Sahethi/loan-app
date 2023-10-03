import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router';
import './Register.css'

export default function AdminEditEmployee() {
    const {employeeID} = useParams(); 
    const [employee, setEmployee] = useState({
        employee_id: "",
        first_name:"",
        last_name:"",
        home_add:"", 
        email_id:"", 
        phone_num:"", 
        employee_id:"",     
        dept:"",
        designation:"",
        gender:"",
        dob:"",
        doj:"",
        password: ""
    });

    const [error, setError] = useState({
        first_name:"", //first_name
        last_name:"",// last_name
        home_add:"", //home_add
        email_id:"", //email_id
        phone_num:"", //phone_num     
        dept:"", //dept
        designation:"",
        gender:"",
        dob:"",
        doj:""
    });

    const [submit, isSubmit] = useState(true);

    const navigate = useNavigate();
    const url = `http://localhost:8080/employees/${employeeID}`;

    const fetchData = async() => {
        try{
            const response = await axios(url);
            setEmployee(response.data);
            console.log(response.data);
        } catch (err) {
            console.log("Error:" + err);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

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
                    // isSubmit(false);
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setEmployee({...employee, [name] : value});

                return;
            case 'phone_num':
                if(value.length != 10 || !/^\d+$/.test(value)){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid 10-digit contact number"
                        }
                    });
                    // isSubmit(false);
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        setEmployee({...employee, [name] : value});

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
                        const vb = new Date(employee.dob).getTime();
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
                    setEmployee({...employee, [name] : value});

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
                        const vj = new Date(employee.doj).getTime();
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
                    setEmployee({...employee, dob : value});

                return;
            
            
            default:
                if(!value.replace(/\s/g,'').length){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Field cannot be blank"
                        }
                    });
                    // isSubmit(false);
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


        setEmployee({...employee, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8080/updateEmployee/"+employee.employee_id, {
                ...employee
            }).then((res) => {
                // alert("Employee Updated Successfully")
                console.log(res.data);
                navigate("/adminEmployee");
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
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
            
            <div className='register-form'>
            <h2 className='pb-3'>Loan Management Application</h2>
            <h3 className='pb-3'>Edit Employee Details</h3>
            <form action="" onSubmit={handleSubmit}>
                                
                <div className='form-group'>
                    <label for="employee_id">Employee ID:</label>
                    <input type="text" className = "form-control" name="employee_id" value={employee.employee_id} onChange={handleInput} disabled/>
                    <br/>
                </div>

                <div className='form-group'>
                    <label for="first_name" >First name:</label>
                    <input type="text" className = "form-control" name="first_name" value={employee.first_name} onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.first_name}</span>
                    
                    <br/>
                </div>
                
                <div className='form-group'><label for="last_name" >Last name:</label>
                <input type="text" className = "form-control" name="last_name" value={employee.last_name} onChange={handleInput}/>
                <span style={{color:"red"}}>{error.last_name}</span>
                
                <br/></div>
                
                <div className='form-group'><label for="home_add">Home address:</label>
                <textarea name="home_add"className = "form-control" value={employee.home_add} onChange={handleInput}/>
                <span style={{color:"red"}}>{error.home_add}</span>
            
                <br></br></div>
                
                <div className='form-group'>
                    <label for="email_id">Email:</label>
                    <input type="text" className = "form-control" value={employee.email_id} onChange={handleInput} name="email_id"/>
                    <span style={{color:"red"}}>{error.email_id}</span>
                    
                    <br></br>
                </div>
                
                <div className='form-group'><label for="phone_num">Contact Number:</label>
                <input type="number" className = "form-control" maxLength={10} minLength={10} name="phone_num" value={employee.phone_num} onChange={handleInput}/>
                <span style={{color:"red"}}>{error.phone_num}</span>
            
                <br></br></div>
                
                <div className='form-group'>
                    <label for="password">Password:</label>
                    <input type="password" className = "form-control" name="password" onChange = {handleInput} value={employee.password} disabled/>
                    <br/>
                </div>               
               
                <div className='form-group'>
                    <label for="dept">Select department:</label>
                    <select name="dept" className = "form-control" value={employee.dept} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="sales">Sales</option>
                        <option value="hr">Human Resources</option>
                        <option value="accounting">Accounting</option>
                        <option value="technical">Technical</option>
                    </select>
                    <span style={{color:"red"}}>{error.dept}</span>

                </div>
                <br>
                </br>
                <div className='form-group'>
                    <label for="designation">Select Designation:</label>
                    <select className = "form-control" name="designation" value={employee.designation} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="manager">Manager</option>
                        <option value="associate">Associate</option>
                        <option value="support">Support</option>
                    </select>
                    <span style={{color:"red"}}>{error.designation}</span>

                </div>
                <br>
                </br>
                <div className='form-group'>
                    <label for="gender">Select Gender:</label>
                    <select className = "form-control" name="gender" value={employee.gender} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                    <span style={{color:"red"}}>{error.gender}</span>

                </div>
                <br></br>
                <div className='form-group'>
                <label for="dob">Date of Birth:</label>
                <input className = "form-control" type="date" name="dob" value={employee.dob} onChange={handleInput}/>
                <span style={{color:"red"}}>{error.dob}</span>
                
                <br></br>
                </div>
                <div className='form-group'>
                    <label for="doj">Date of Joining:</label>
                    <input className = "form-control" type="date" name="doj" value={employee.doj} onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.doj}</span>
                
                    <br></br>
                </div>
   
                <button type="submit" className= "btn btn-primary d-block w-100" disabled={!submit}>Update Employee</button>.
                <button type="submit" className= "btn btn-primary d-block w-100" onClick={()=>navigate("/adminEmployee")}>Cancel</button>
            </form>
            </div>
            
        </div>
    )
}
