import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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

if(loading) {
    return <p>Loading...</p>
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
        <form onSubmit="handleSubmit">
                        <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text" value={sessionStorage.getItem('sessionId')} class="form-control"/><br></br>
                        </div>
                        <div class="form-group">
                        <label>Item Category</label>&nbsp;&nbsp;
                        <select defaultValue={""} onChange={handle1} value={currCat}> 
                            <option disabled value="">Select</option> 
                        
                            {
                                cats.map(item =>  <option>{item}</option>)
                            }
                        </select>
                        
                        </div><br></br>
                        {
                            currCat != "" && 
                            <div class="form-group">
                        <label>Item Description</label>
                        <select defaultValue={""} onChange={handle2} value={currDesc}>
                        <option disabled value="">Select</option>
                        {       
                          desc.map(curr => curr!=undefined && <option>{curr}</option>)   
                        }
                        </select>
                        {/* <input type="text"  class="form-control"/> */}
                        </div>
                        }
                        <br></br>
                        {
                            currDesc != "" &&
                            <div class="form-group">
                        <label>Item make</label>
                        <select defaultValue={""} onChange = {handle3} value={currMake}>
                        <option disabled value="">Select</option>
                        {
                            make.map(curr => curr!=undefined && <option>{curr}</option>)
                        }
                        </select>
                        {/* <input type="text"  class="form-control"/> */}
                        </div>
                        }
                        <br></br>
                        <div class="form-group">
                        
                        {
                            currCat != "" && currDesc != ""   && items.find(item => (item.item_description === currDesc && item.item_make === currMake)) != undefined && <p>Item value:{items.find(item => (item.item_description === currDesc && item.item_make === currMake)).item_valuation}</p>
                        }
                        </div><br></br>
                    
                        <button type="submit" class="btn btn-primary">Apply Loan</button>
                    </form>

        </div>
        </div>
    </div>
    </div>)
}

export default ApplyLoan;