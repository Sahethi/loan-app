import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './ApplyLoan.css'
import applyLoanImg from '../assets/images/img2.svg'
import UserNavbar from "./UserNavbar";
function ApplyLoan(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const [cats, setCats] = useState([]);
    const [currCat, setcurrCat] = useState("");

    //set current descriptions based on category selected
    const [desc, setDesc] = useState([]);
    const [currDesc, setcurrDesc] = useState("");

    //set current make based on description selected
    const [make, setMake] = useState([]);
    const [currMake, setcurrMake] = useState("");

    
    useEffect(() => {
        axios.get("http://localhost:8080/items").then((response) => {
            setItems(response.data);
            setCats([...new Set(response.data.map(item => item.item_category))])
            console.log(response.data);
            setLoading(false);
        }).catch(error => {
            alert("Error: " + error);
            setLoading(false);
        });

    }, []);

    const handle1 = (e) => {
        //e.target.value is the currently selected category
        setcurrCat(e.target.value);
        //we also need to set desc to a set of descriptions under the current category
        const all = items.map(item => {
            if(item.item_category === e.target.value) {
                return item.item_description;
            }
        });
    
        setDesc([...new Set(all)]);
        setcurrDesc("");
        setcurrMake("");
    }

    const handle2 = (e) => {
        //e.target.value is the currently selected description
        setcurrDesc(e.target.value);
        //we also need to set make to a set of makes under the current description
        const all = items.map(item => {
            if(item.item_description === e.target.value) {
                return item.item_make;
            }
        });

        setMake([...new Set(all)]);

        setcurrMake("");
        console.log("handle2\ncurrCat:" + currCat + " currDesc:" + e.target.value + " currMake:" + currMake + " make: " + make);

    }

    const handle3 = (e) => {
        setcurrMake(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();    
               
        try {
            let x =items.find(item => (item.item_description === currDesc && item.item_make === currMake));
            if(x)x=x.item_valuation;
            await axios.post("http://localhost:8080/forapplyloans", {
                employee_id: sessionStorage.getItem("sessionId") ,
                item_category: currCat,
                item_description: currDesc,
                item_make: currMake,
                item_valuation:x
            }).then((res) => {
                // alert("Loan Applied")
                window.location.replace("http://localhost:3000/UserDashboard");
                console.log(res.data);
                
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }   
    }

if(loading) {
    return <p>Loading...</p>
}
return(
    <div>
        <UserNavbar />
    <div className="apply-loans-container">
        <img src = {applyLoanImg} />
    <div class="container">
            <h2 className="apply-loan-heading text-primary">Your Loan is a few clicks away!</h2>
        
        <form onSubmit={handleSubmit}>
                        <div class="form-group">
                        <label className="text-muted">Employee Id</label>
                        <input type="text" value={sessionStorage.getItem('sessionId')} class="form-control"/>
                        </div>
                        <div class="form-group">
                        <label className="text-muted">Item Category</label>
                        <select  className = "form-control" defaultValue={""} onChange={handle1} value={currCat}> 
                            <option disabled value="">Select</option> 
                            {
                                cats.map(item =>  <option>{item}</option>)
                            }
                        </select>
                        
                        </div>
                        {
                            
                            <div class="form-group">
                        <label className="text-muted">Item Description</label>
                        <select className = "form-control" disabled = {currCat == "" ? true : false} defaultValue={""} onChange={handle2} value={currDesc}>
                        <option disabled value="">Select</option>
                        {       
                          desc.map(curr => curr!==undefined && <option>{curr}</option>)   
                        }
                        </select>
                        {/* <input type="text"  class="form-control"/> */}
                        </div>
                        }
                        
                        {
                           
                            <div class="form-group">
                        <label className="text-muted">Item Make</label>
                        <select disabled = { currDesc == "" ? true : false} className = "form-control" defaultValue={""} onChange = {(e) => {
                            
                            handle3(e);
                        }} value={currMake}>
                        <option disabled value="">Select</option>
                        {
                            make.map(curr => curr!==undefined && <option>{curr}</option>)
                        }
                        </select>
                        {/* <input type="text"  class="form-control"/> */}
                        </div>
                        }
                        
                        <div>
                        
                        {
                            currCat != "" && currDesc != "" && items.find(item => (item.item_description === currDesc && item.item_make === currMake)) != undefined && 
                            <p> Item Value: {items.find(item => (item.item_description === currDesc && item.item_make === currMake)).item_valuation}
                            </p>
                        }
                        </div>
                    
                        <button type="submit" class="btn btn-primary" disabled={!currMake}>Apply Loan</button>
                    </form>

        
    </div>
    </div></div>)
}

export default ApplyLoan;