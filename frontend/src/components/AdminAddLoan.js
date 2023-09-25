import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
import './Register.css'

export default function AdminAddLoan() {
    const [loan, setLoan] = useState({
        loan_id:"",
        loan_type:"",
        duration_in_years:""
    });
    const navigate = useNavigate();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoan({...loan, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/saveLoan", {
                ...loan
            }).then((res) => {
                alert("Loan Added Successfully")
                console.log(res.data);
                navigate("/adminLoan");
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
            <h2 className='pb-3'>Loan Management Application</h2>
            <h3 className='pb-3'>Loan Cards Master Data Details</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="loan_id" >Loan Id:</label>
                    <input type="text" className = "form-control" name="loan_id" value={loan.loan_id} onChange={handleInput}/>
                    <br/>
                </div>

                <div className='form-group'>
                    <label for="loan_type">Loan Type:</label>
                    <select name="loan_type" className = "form-control" value={loan.loan_type} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Crockery">Crockery</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <br>
                </br>

                <div className='form-group'><label for="duration_in_years">Loan Duration (in years): </label>
                <input type="number" className = "form-control" name="duration_in_years" min="0" value={loan.duration_in_years} onChange={handleInput}/>
                <br></br></div>
   
                <button type="submit" className= "btn btn-primary d-block w-100">Submit</button>
            </form>
            </div>
            
        </div>
    )
}
