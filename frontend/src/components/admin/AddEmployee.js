import React, {useState} from 'react'
import axios from 'axios'
import '../Register.css'
import { useNavigate } from 'react-router';


export default function AddEmployee() {
    const [addEmployee, setaddEmployee] = useState({
        first_name:"", //first_name
        last_name:"",// last_name
        home_add:"", //home_add
        email_id:"", //email_id
        phone_num:"", //phone_num
        password: "",
        employee_id:"",     
        dept:"", //dept
        designation:"",
        gender:"",
        dob:"",
        doj:""
    });

    const navigate = useNavigate();
    // const [loginRegistration, setLoginRegistration] = useState({
    //     username:"",
    //     password:""
    // });

    // const deptOptions = ["Human Resources", "Accounting", "Technical", "Sales"];
    // const designationOptions = ["Manager", "Associate", "Support"];
    // const genderOptions=["Male","Female","Other"];

    // async function sendToLogin(response1){
    //     try{
    //         const response = await axios.post(`http://localhost:8080/saveLogin`, {
    //             username: addEmployee.username ,
    //             password: addEmployee.password
    //         }).then((response)=>{
    //             console.log(response.data);
    //         });
    //         setLoginRegistration(response1);
    //         console.log(response1); 
    //         navigate("/login")
    //     } catch (err) {
    //         console.log("Error:" + err);
    //     }
    // }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setaddEmployee({...addEmployee, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value)
        if(e.target.name == 'employee_id'){
            setaddEmployee(cur =>({...cur, username : value}));
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        // console.log(addEmployee);
        // axios.post('http://localhost:8080/saveEmployee', {addEmployee}) 
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
                ...addEmployee
            }, config).then((res) => {
                alert("User Added Successfully")
                // sendToLogin(res);
                console.log(res.data);
                
                navigate("/adminEmployee");
                
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
            <h2 className='pb-3'>Add Employee</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="first_name" >First name:</label>
                    <input type="text" className = "form-control" name="first_name" value={addEmployee.first_name} onChange={handleInput}/>
                    <br/>
                </div>
                
                <div className='form-group'><label for="last_name" >Last name:</label>
                <input type="text" className = "form-control" name="last_name" value={addEmployee.last_name} onChange={handleInput}/>
                <br/></div>
                
                <div className='form-group'><label for="home_add">Home address:</label>
                <textarea name="home_add"className = "form-control" value={addEmployee.home_add} onChange={handleInput}/>
                <br></br></div>
                
                <div className='form-group'>
                    <label for="email_id">Email:</label>
                    <input type="text" className = "form-control" value={addEmployee.email_id} onChange={handleInput} name="email_id"/>
                    <br></br>
                </div>
                
                <div className='form-group'><label for="phone_num">Contact Number:</label>
                <input type="number" className = "form-control" maxLength={10} minLength={10} name="phone_num" value={addEmployee.phone_num} onChange={handleInput}/>
                <br></br></div>
                
                <div className='form-group'>
                <label for="employee_id">Employee ID:</label>
                <input type="text" className = "form-control" name="employee_id" value={addEmployee.employee_id} onChange={handleInput}/>
                <br/>
                </div>
                
                <div className='form-group'>
                    <label for="password">Password:</label>
                    <input type="password" className = "form-control" name="password" onChange = {handleInput} value={addEmployee.password} />
                    <br/>
                </div>               
               
                <div className='form-group'>
                    <label for="dept">Select department:</label>
                    <select name="dept" className = "form-control" value={addEmployee.dept} onChange={handleInput}>
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
                    <select className = "form-control" name="designation" value={addEmployee.designation} onChange={handleInput}>
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
                    <select className = "form-control" name="gender" value={addEmployee.gender} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                </div>
                <br></br>
                <div className='form-group'>
                <label for="dob">Date of Birth:</label>
                <input className = "form-control" type="date" name="dob" value={addEmployee.dob} onChange={handleInput}/>
                <br></br>
                </div>
                <div className='form-group'>
                    <label for="doj">Date of Joining:</label>
                    <input className = "form-control" type="date" name="doj" value={addEmployee.doj} onChange={handleInput}/>
                    <br></br>
                </div>
                
                <button type="submit" className= "btn btn-primary d-block w-100">Submit</button>
            </form>
            </div>
            
        </div>
    )
}
