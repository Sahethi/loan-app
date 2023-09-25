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
                alert("Updated Successfully")
                console.log(res.data);
                navigate("/AdminItemDetails");
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }   
    }
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
                    <br/>
                </div>
                
                <div className='form-group'>
                    <label for="item_valuation" >Item Value:</label>
                    <input type="text" className = "form-control" name="item_value" value={items.item_valuation} onChange={handleInput}/>
                    <br/>
                </div>
                <div className='form-group'>
                    <label for="issue_status">Issue Status:</label>
                    <select name="issue_status" className = "form-control" value={items.issue_status} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="y">Yes</option>
                        <option value="n">No</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label for="issue_status">Item Make:</label>
                    <select name="item_make" className = "form-control" value={items.item_make} onChange={handleInput}>
                        <option disabled value="">Select</option>
                        <option value="Wooden">WoodeN</option>
                        <option value="Glass">Glass</option>
                        
                    </select>
                </div>
                <div className='form-group'>
                    <label for="item_category" >Item Category:</label>
                    <input type="text" className = "form-control" name="item_category" value={items.item_category} onChange={handleInput}/>
                    <br/>
                </div>
                <br>
                </br>

                
   
                <button type="submit" className= "btn btn-primary d-block w-100">Update Loan Card</button>.
                <button type="submit" className= "btn btn-primary d-block w-100" onClick={()=>navigate("/adminLoan")}>Cancel</button>
            </form>
            </div>
            
        </div>
    )
}