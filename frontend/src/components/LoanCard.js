import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoanCard.css'
export default function LoanCard() {
    const [loanCards, setLoanCards] = useState();

    useEffect(() => {
        //fetch loan cards here
    setLoanCards([{loanId : 10001,loanType : "Furniture",duration : 2, issueDate : 'abcd'}]);

    },[])
  return (
    <div className="loan-cards-container">
        <Link to ="/UserDashboard">Back to Home</Link>
      <h2 className='loan-cards-heading'>Loan Cards Availed</h2>
      <table className = "table table-striped">
        <thead>
            <tr>
            <th scope="col" className='col-3'>Loan ID</th>
            <th scope="col" className='col-3'>Loan Type</th>
            <th scope="col" className='col-3'>Loan Duration</th>
            <th scope="col" className='col-3'>Card Issue Date</th>
            </tr>
        </thead>
        <tbody>
        {loanCards&&loanCards.map((loanCard,index) => {
            return (<div className = 'row' key = {index}>
                            <div className='col-3'>
                                {loanCard.loan_id}
                            </div>
                            <div className='col-3'>
                                {loanCard.loan_type}
                            </div>
                            <div className='col-3'>
                                {loanCard.duration_in_years}
                            </div>
                            <div className='col-3'>
                                {loanCard.issue_date}
                            </div>
                     </div>);
})}
        </tbody>
       
      </table>
    </div>
  )
}
