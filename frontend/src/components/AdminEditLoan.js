import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router';
import { useParams } from 'react-router';
import './Register.css'

export default function AdminEditLoan() {
    const {loanID} = useParams(); 
    const [loan, setLoan] = useState({
        loan_id:"",
        loan_type:"",
        duration_in_years:""
    });
    const [error, setError] = useState("");
    const [submit, isSubmit] = useState(true);
    const navigate = useNavigate();
    const url = `http://localhost:8080/fetchLoan/${loanID}`;

    const fetchData = async() => {
        try{
            const response = await axios(url);
            setLoan(response.data);
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
        if(!value.replace(/\s/g,'').length || !/^\d+$/.test(value)) {
            setError(err => {return "Please enter a valid value"});
        } else {
            setError(err => {return ""});
        }
        setLoan({...loan, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8080/updateLoan/"+loan.loan_id, {
                ...loan
            }).then((res) => {
                // alert("Loan Card Updated Successfully")
                console.log(res.data);
                navigate("/adminLoan");
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            // alert(err);
        }   
    }
    useEffect(() => {
        if(error != "") {
            isSubmit(false);
        } else {
            isSubmit(true);
        }
        
    }, [error]);
    return (
        <div className= "register-wrapper">
            
            <div className='register-form'>
            <h2 className='pb-3'>Loan Management Application</h2>
            <h3 className='pb-3'>Edit Loan Card Details</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="loan_id" >Loan Id:</label>
                    <input type="text" className = "form-control" name="loan_id" value={loan.loan_id} disabled/>
                    <br/>
                </div>

                <div className='form-group'>
                    <label for="loan_type">Loan Type:</label>
                    <select name="loan_type" className = "form-control" value={loan.loan_type} disabled>
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
                <span style={{color:"red"}}>{error}</span>
                <br></br></div>
   
                <button type="submit" className= "btn btn-primary d-block w-100" disabled={!submit}>Update Loan Card</button>.
                <button type="submit" className= "btn btn-primary d-block w-100" onClick={()=>navigate("/adminLoan")}>Cancel</button>
            </form>
            </div>
            
        </div>
    )
}
