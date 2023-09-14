import React, {useState} from 'react'
import axios from 'axios'
import './Register.css'


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

    const [loginRegistration, setLoginRegistration] = useState({
        username:"",
        password:""
    });

    const deptOptions = ["Human Resources", "Accounting", "Technical", "Sales"];
    const designationOptions = ["Manager", "Associate", "Support"];
    const genderOptions=["Male","Female","Other"];

    async function sendToLogin(response){
        try{
            const response = await axios.post(`http://localhost:8080/saveLogin`, {
                username: userRegistration.username ,
                password: userRegistration.password
            }).then((response)=>{
                console.log(response.data);
            });
            setLoginRegistration(response.data);
            console.log(response.data); 
        } catch (err) {
            console.log("Error:" + err);
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({...userRegistration, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value)
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
        
        try {
            await axios.post("http://localhost:8080/saveEmployee", {
                ...userRegistration
            }, config).then((res) => {
                alert("User Registered Successfully")
                sendToLogin(res);
                console.log(res.data);
                
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }   
    }
    return (
        <div className= "register-wrapper">
            
            <div className='register-form'>
            <h2 className='pb-3'>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="first_name" >First name:</label>
                    <input type="text" className = "form-control" name="first_name" value={userRegistration.first_name} onChange={handleInput}/>
                    <br/>
                </div>
                
                <div className='form-group'><label for="last_name" >Last name:</label>
                <input type="text" className = "form-control" name="last_name" value={userRegistration.last_name} onChange={handleInput}/>
                <br/></div>
                
                <div className='form-group'><label for="home_add">Home address:</label>
                <textarea name="home_add"className = "form-control" value={userRegistration.home_add} onChange={handleInput}/>
                <br></br></div>
                
                <div className='form-group'>
                    <label for="email_id">Email:</label>
                    <input type="text" className = "form-control" value={userRegistration.email_id} onChange={handleInput} name="email_id"/>
                    <br></br>
                </div>
                
                <div className='form-group'><label for="phone_num">Contact Number:</label>
                <input type="number" className = "form-control" maxLength={10} minLength={10} name="phone_num" value={userRegistration.phone_num} onChange={handleInput}/>
                <br></br></div>
                
                <div className='form-group'>
                <label for="employee_id">Employee ID:</label>
                <input type="text" className = "form-control" name="employee_id" value={userRegistration.employee_id} onChange={handleInput}/>
                <br/>
                </div>
                
                <div className='form-group'>
                    <label for="password">Password:</label>
                    <input type="password" className = "form-control" name="password" onChange = {handleInput} value={userRegistration.password} />
                    <br/>
                </div>               
               
                <div className='form-group'>
                    <label for="dept">Select department:</label>
                    <select name="dept" className = "form-control" value={userRegistration.dept} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="sales">Sales</option>
                        <option value="hr">Human Resources</option>
                        <option value="accounting">Accounting</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>
                <br>
                </br>
                <div className='form-group'>
                    <label for="designation">Select Designation:</label>
                    <select className = "form-control" name="designation" value={userRegistration.designation} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="manager">Manager</option>
                        <option value="associate">Associate</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <br>
                </br>
                <div className='form-group'>
                    <label for="gender">Select Gender:</label>
                    <select className = "form-control" name="gender" value={userRegistration.gender} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                </div>
                <br></br>
                <div className='form-group'>
                <label for="dob">Date of Birth:</label>
                <input className = "form-control" type="date" name="dob" value={userRegistration.dob} onChange={handleInput}/>
                <br></br>
                </div>
                <div className='form-group'>
                    <label for="doj">Date of Joining:</label>
                    <input className = "form-control" type="date" name="doj" value={userRegistration.doj} onChange={handleInput}/>
                    <br></br>
                </div>
                
                <button type="submit" className= "btn btn-primary d-block w-100">Submit</button>
            </form>
            </div>
            
        </div>
    )
}
