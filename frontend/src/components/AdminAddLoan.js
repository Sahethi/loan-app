import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
import './Register.css'

export default function AdminAddLoan() {
    const [loan, setLoan] = useState({
        loan_id:"",
        loan_type:"",
        duration_in_years:""
    });
    const [error, setError] = useState({
        loan_id:" ",
        loan_type:" ",
        duration_in_years:" "
    });
    const [submit, isSubmit] = useState(false);
    const navigate = useNavigate();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'loan_id':
                if(!value.replace(/\s/g,'').length){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Field cannot be blank"
                        }
                    });
                }
                else if(value.replace(/\s/g,'').length != 6){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid loan id"
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
                setLoan({...loan, [name] : value});
                return;
            case 'loan_type':
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
                setLoan({...loan, [name] : value});
                return;
            case 'duration_in_years':
                if( !/^[1-9][0-9]*$/.test(value)){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Please enter a valid duration"
                        }
                    });
                } else {
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
                setLoan({...loan, [name] : value});
                return;
        }
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
        console.log("HI" + submit);
        isSubmit(ans);
        
    }, [error]);
    return (
        <div className= "register-wrapper">
            
            <div className='register-form'>
            <h3 className='pb-3'>Enter Loan Cards Details</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="loan_id" >Loan Id:</label>
                    <input type="text" className = "form-control" name="loan_id" value={loan.loan_id} onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.loan_id}</span>
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
                    <span style={{color:"red"}}>{error.loan_type}</span>
                </div>
                <br>
                </br>

                <div className='form-group'><label for="duration_in_years">Loan Duration (in years): </label>
                <input type="number" className = "form-control" name="duration_in_years" min="0" value={loan.duration_in_years} onChange={handleInput}/>
                <span style={{color:"red"}}>{error.duration_in_years}</span>
                <br></br></div>
   
                <button type="submit" className= "btn btn-primary d-block w-100" disabled={!submit}>Submit</button>
            </form>
            </div>
            
        </div>
    )
}
