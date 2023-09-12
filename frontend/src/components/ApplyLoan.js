import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ApplyLoan(){
    const [loans, setLoans] = useState([]);
    async function applyLoan(event){
        event.preventDefault();
        try{
            await axios.get("https://localhost:8080/getAllLoanTypes").then((res) => {
            console.log(res.data);
            setLoans(res.data);
        },fail => {console.error(fail);});
        }catch (err){alert(err);}
    }
    
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
                        <input type="text"  class="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Item Category</label>
                        </div>
                        <div class="form-group">
                        <label>Item Description</label>
                        <input type="text"  class="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Item value</label>
                        <input type="text"  class="form-control"/>
                        </div>
                        <div class="form-group">
                        <label>Item make</label>
                        <input type="text"  class="form-control"/>
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Apply Loan</button>
                    </form>

        </div>
        </div>
    </div>
    </div>)
}

export default ApplyLoan;