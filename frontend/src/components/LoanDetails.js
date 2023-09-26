import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import './LoanDetails.css'
import EmptyTable from './EmptyTable';

export default function LoanDetails() {
    const {empID} = useParams();
    // const handleProceed = (e) => {
    //     history.push(`/items/${empID}`);
    // };
    const [loans, setLoans] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const url = `http://localhost:8080/loans/${empID}`;
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setLoans(response.data);
            // console.log(items.issue);
        } catch (err) {
            console.log("Error:" + err);
            setErrorMessage("Loan Details Empty!");
        }
    };

    useEffect(() => {
        fetchData();
    },[]);
    


  return (
    <div className='loan-details-container'>
        <h2>Loan Details</h2>
    

    
        <div class="row employee-details-container">
            <div class="col-4">Employee ID: {empID}</div>
            <div class="col-4">Designation: {sessionStorage.getItem("designation")}
            </div>
            <div class="col-4">Department: {sessionStorage.getItem("dept")}</div>
        </div>
        <br/>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col" className='col-3'>Loan ID</th>
      <th scope="col" className='col-3'>Loan Type</th>
      <th scope="col" className='col-3'>Loan Duration</th>
      <th scope="col" className='col-3'>Card Issue Date</th>
    </tr>
    {errorMessage && 
                    <div className="error-message">
                        {EmptyTable(errorMessage)}
                    </div>
                }
    </thead>
    <tbody>
    {
      loans.map((loan,idx)=>(
        <tr>
          <td>{loan.loan.loan_id}</td>
          <td>{loan.loan.loan_type}</td>
          <td>{loan.loan.duration_in_years}</td>
          <td>{loan.card_issue_date}</td>
        </tr>
      ))
    }
    </tbody>
    

  
</table>
    </div>
  )
}
