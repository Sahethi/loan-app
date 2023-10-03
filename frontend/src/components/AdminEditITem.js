import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router';
import { useParams } from 'react-router';
//import './Register.css'

export default function AdminEditItem() {
    const {item_id} = useParams(); 
    const [items, setItems] = useState({
        item_id:"",
        item_description:"",
        item_make:"",
        item_category:"",
        item_valuation:"",
        issue_status:""
    });
    const [error, setError] = useState({
        item_description:"",
        issue_status:"",
        item_valuation:"",
        item_category:"",
        item_make:"",
    });
    const [submit, isSubmit] = useState(true);

    const navigate = useNavigate();
    const url = `http://localhost:8080/fetchitems/${item_id}`;

    const fetchData = async() => {
        try{
            const response = await axios(url);
            setItems(response.data);
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

        switch(name) {
            
            case 'item_valuation':
                if(!value.replace(/\s/g,'').length || !/^\d+$/.test(value)) {
                    console.log("hi");

                    setError({...error, item_valuation:"Please enter a valid value"});
                } else {
                    setError({...error, item_valuation:""});
                }
                setItems({...items, [name]:value});
                return;

            default:
                if(!value.replace(/\s/g,'').length){
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: "Field cannot be blank"
                        }
                    });
                    // isSubmit(false);
                }
                else{
                    setError(errors => {
                        return {
                            ...errors,
                            [name]: ""
                        }
                    });
                }
        }

        setItems({...items, [name] : value});
        console.log(e.target.name);
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8080/updateItem/"+items.item_id, {
                ...items
            }).then((res) => {
                // alert("Updated Successfully")
                console.log(res.data);
                navigate("/AdminItemDetails");
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            // alert(err);
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
        isSubmit(ans);
        
    }, [error]);
    
    return (
        <div className= "register-wrapper">
            
            <div className='register-form'>
            <h2 className='pb-3'>Loan Management Application</h2>
            <h3 className='pb-3'>Edit Details</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="item_id" >Item ID:</label>
                    <input type="text" className = "form-control" name="item_id" value={items.item_id} disabled/>
                    <br/>
                </div>
                <div className='form-group'>
                    <label for="item_description" >Item Description:</label>
                    <input type="text" className = "form-control" name="item_description" value={items.item_description} onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.item_description}</span>
                    <br/>
                </div>
                
                <div className='form-group'>
                    <label for="item_valuation" >Item Value:</label>
                    <input type="text" className = "form-control" name="item_valuation" value={items.item_valuation} onChange={handleInput}/>
                    <span style={{color:"red"}}>{error.item_valuation}</span>
            
                    <br/>
                </div>
                <div className='form-group'>
                    <label for="issue_status">Issue Status:</label>
                    <select name="issue_status" className = "form-control" value={items.issue_status} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                        
                    </select>
                    <span style={{color:"red"}}>{error.issue_status}</span>

                </div>
                <div className='form-group'>
                    <label for="issue_status">Item Make:</label>
                    <select name="item_make" className = "form-control" value={items.item_make} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="Wooden">Wooden</option>
                        <option value="Glass">Glass</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Metal">Metal</option>
                        
                    </select>
                    <span style={{color:"red"}}>{error.item_make}</span>

                </div>
                <div className='form-group'>
                    <label for="item_category">Item Category</label>
                    <select name="item_category" className = "form-control" value={items.item_category}  onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Crockery">Crockery</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <br/>
                </div>
                <span style={{color:"red"}}>{error.item_category}</span>

                <br>
                </br>

                
   
                <button type="submit" className= "btn btn-primary d-block w-100" disabled={!submit}>Update Loan Card</button>.
                <button type="submit" className= "btn btn-primary d-block w-100" onClick={()=>navigate("/adminLoan")}>Cancel</button>
            </form>
            </div>
            
        </div>
    )
}