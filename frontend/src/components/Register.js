import React, {useState} from 'react'
import axios from 'axios'

export default function Register() {
    const [userRegistration, setuserRegistration] = useState({
        first_name:"", //first_name
        last_name:"",// last_name
        home_add:"", //home_add
        email_id:"", //email_id
        phone_num:"", //phone_num
        employee_id:"",     
        username:"",  // no need
        password:"", 
        dept:"", //dept
        designation:"",
        gender:"",
        dob:"",
        doj:""
    });
    const deptOptions = ["Human Resources", "Accounting", "Technical", "Sales"];
    const designationOptions = ["Manager", "Associate", "Support"];
    const genderOptions=["Male","Female","Other"];
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({...userRegistration, [name] : value});
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
                console.log(res.data);
                
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }   
    }
    return (
        <div>
            <div>Register</div>
            <form action="" onSubmit={handleSubmit}>
                
                <label for="first_name">First name:</label>
                <input type="text" name="first_name" value={userRegistration.first_name} onChange={handleInput}/>
                <br/>
                <label for="last_name">Last name:</label>
                <input type="text" name="last_name" value={userRegistration.last_name} onChange={handleInput}/>
                <br/>
                <label for="home_add">Home address:</label>
                <textarea name="home_add" value={userRegistration.home_add} onChange={handleInput}/>
                <br></br>
                <label for="email_id">Email:</label>
                <input type="text" value={userRegistration.email_id} onChange={handleInput} name="email_id"/>
                <br></br>
                <label for="phone_num">Contact Number:</label>
                <input type="number" maxLength={10} minLength={10} name="phone_num" value={userRegistration.phone_num} onChange={handleInput}/>
                <br></br>
                <label for="employee_id">Employee ID:</label>
                <input type="text" name="employee_id" value={userRegistration.employee_id} onChange={handleInput}/>
                <br/>
                <label for="username">Username:</label>
                <input type="text" name="username" value={userRegistration.username} onChange={handleInput} />               <br/>
                <label for="password">Password:</label>
                <input type="password" name="password" value={userRegistration.password} onChange={handleInput}/>                <br/>
                <div>
                    <label for="dept">Select department:</label>
                    <select name="dept" value={userRegistration.dept} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="sales">Sales</option>
                        <option value="hr">Human Resources</option>
                        <option value="accounting">Accounting</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>
                <br>
                </br>
                <div>
                    <label for="designation">Select Designation:</label>
                    <select name="designation" value={userRegistration.designation} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="manager">Manager</option>
                        <option value="associate">Associate</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <br>
                </br>
                <div>
                    <label for="gender">Select Gender:</label>
                    <select name="gender" value={userRegistration.gender} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                        <option value="o">Other</option>
                    </select>
                </div>
                <br></br>
                <label for="dob">Date of Birth:</label>
                <input type="date" name="dob" value={userRegistration.dob} onChange={handleInput}/>
                <br></br>
                <label for="doj">Date of Joining:</label>
                <input type="date" name="doj" value={userRegistration.doj} onChange={handleInput}/>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
