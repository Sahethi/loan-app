import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

export default function LoanDetails() {
    const {empID} = useParams();
    // const handleProceed = (e) => {
    //     history.push(`/items/${empID}`);
    // };
    const [loans, setLoans] = useState([]);
    const url = `http://localhost:8080/loans/${empID}`;
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setLoans(response.data);
            // console.log(items.issue);
        } catch (err) {
            console.log("Error:" + err);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);
    


  return (
    <div>
        <h2>Loan Details</h2>

        <div class="row">
            <div class="col-4">Employee ID: {empID}</div>
            <div class="col-4">Designation: {sessionStorage.getItem("designation")}
            </div>
            <div class="col-4">Department: {sessionStorage.getItem("dept")}</div>
        </div>
        <br/>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Loan ID</th>
      <th scope="col">Loan Type</th>
      <th scope="col">Loan Duration</th>
      <th scope="col">Card Issue Date</th>
    </tr>
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

  </thead>
</table>
    </div>
  )
}
