import React, {useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import EmptyTable from './EmptyTable';

export default function AdminEmployeeManagement() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const url = `http://localhost:8080/fetchAllEmployees`;
    const deleteEmployee = empid => async() => {
        try{
            const response = await axios.get("http://localhost:8080/deleteEmployee/"+empid);
            console.log("http://localhost:8080/deleteEmployee/"+empid);
            alert("Employee Deleted");
            window.location.reload(false)
        } catch(err){console.log(err);}
    };

    const fetchData = async() => {
        let response;
        try{
            response = await axios(url);
            setEmployees(Array.from(response.data));
        } catch (error) {
            //when empty gives statuscode of 404 as NoDataFoundException
            console.log("Error:" + error);
            setErrorMessage("Employee List Empty!");
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    const AddEmployee = () => {
        navigate("/admin/adduser")
    }
    
  return (
    <div>
        <button onClick={AddEmployee}>Create New Employee</button>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Employee Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Department</th>
                <th scope="col">Designation</th>
                </tr>
                {errorMessage && 
                    <div className="error-message">
                        {EmptyTable(errorMessage)}
                    </div>
                }
                {
                employees.map((employee,idx)=>(
                    <tr>
                    <td>{employee.employee_id}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.email_id}</td>
                    <td>{employee.dept}</td>
                    <td>{employee.designation}</td>
                    <td>
                        <button><Link to={"/adminEditEmployee/"+employee.employee_id}>Edit</Link></button><br></br>
                        <button onClick={deleteEmployee(employee.employee_id)}>Delete</button>
                    </td>
                    </tr>
                ))
                }

            </thead>
            </table>
    </div>
  )
}
