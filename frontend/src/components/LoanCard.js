import React from 'react'
import { useState,useEffect } from 'react';
export default function LoanCard() {
    const [loanCards, setLoanCards] = useState();

    useEffect(() => {
        //fetch loan cards here
    setLoanCards([{loanId : 10001,loanType : "Furniture",duration : 2, issueDate : 'abcd'}]);

    },[])
  return (
    <div>
      <p>Loan Cards Availed</p>
      <div className = "container">
        
        <div className = "row">
            <div className="col">
                Loan Id
            </div>
            <div className="col">
                Loan Type
            </div>
            <div className="col">
                Duration
            </div>
            <div className="col">
                Card Issue Date
            </div>
        </div>
        {loanCards&&loanCards.map((loanCard,index) => {
            return (<div className = 'row' key = {index}>
                            <div className='col'>
                                {loanCard.loan_id}
                            </div>
                            <div className='col'>
                                {loanCard.loan_type}
                            </div>
                            <div className='col'>
                                {loanCard.duration_in_years}
                            </div>
                            <div className='col'>
                                {loanCard.issue_date}
                            </div>
                     </div>);
})}
      </div>
    </div>
  )
}
