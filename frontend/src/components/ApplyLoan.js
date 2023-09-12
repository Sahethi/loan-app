import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ApplyLoan(){
    const [loans, setLoans] = useState([]);

    const uniqueLoanTypes = (LoanArray) => {
        const loanset = new Set();
        LoanArray.map((loan)=> loanset.add(loan.loan_type));
        return Array.from(loanset);
    }
    const setLoanData = () => {
        axios.get("http://localhost:8080/fetchAllLoanTypes").then((response) => {
            setLoans(uniqueLoanTypes(response.data));
            console.log(response.data)
        }).catch(error => {
            alert("Error: "+error);
        });
    }
    useEffect(() => {
        setLoanData();
    }, []);
    
return(
    <div>
    <div class="container">
        <div class="row">
            <h2>Apply Loan</h2>
        <hr/>
        </div>

        <div class="row">
        <div class="col-sm-6">
        <form>
                        <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text"  class="form-control"/><br></br>
                        </div>
                        <div class="form-group">
                        <label>Item Category</label>&nbsp;&nbsp;
                        <select>
                            {
                                loans.map((loan,index)=>(
                                    <option key={loan} value={loan}>{loan}</option>
                                ))
                            }
                        </select>
                        </div><br></br>
                        <div class="form-group">
                        <label>Item Description</label>
                        <input type="text"  class="form-control"/>
                        </div><br></br>
                        <div class="form-group">
                        <label>Item value</label>
                        <input type="text"  class="form-control"/>
                        </div><br></br>
                        <div class="form-group">
                        <label>Item make</label>
                        <input type="text"  class="form-control"/>
                        </div><br></br>
                    
                        <button type="submit" class="btn btn-primary">Apply Loan</button>
                    </form>

        </div>
        </div>
    </div>
    </div>)
}

export default ApplyLoan;