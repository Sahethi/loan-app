import React,{useState, useEffect} from "react";
import "./AdminItem.css"
import axios from "axios";
import {useNavigate} from 'react-router';
import AdminNavbar from "./AdminNavbar";


function AdminItem(){
    const baseURL="http://localhost:8080/saveItem";
    const [item_id, setitem_id]=useState('');
    const [item_description,setitem_description]=useState('');
    const [issue_status,setissue_status]=useState('');
    const [item_valuation,setitem_Value]=useState('');
    const [item_category,setitem_category]=useState('');
    const [item_make,setitem_make]=useState('');
    const [error, setError] = useState({
        item_id:" ",
        item_description:" ",
        issue_status:" ",
        item_valuation:" ",
        item_category:" ",
        item_make:" ",
    });
    const [submit, isSubmit] = useState(true);
    const navigate = useNavigate();


    const itemidHandler=(e)=>{
        setitem_id(e.target.value)
        if(e.target.value.length != 6) {
            setError({...error, item_id:"Item ID must be exactly 6 characters"});
        } else{
            setError({...error, item_id:""});
        }
    }
    const itemdescrpHandler=(e)=>{
        setitem_description(e.target.value)
        if(!e.target.value.replace(/\s/g,'').length) {
            setError({...error, item_description:"Please enter a valid description"});
        } else {
            setError({...error, item_description:""});
        }
    }
    const issueHandler=(e)=>{
        setissue_status(e.target.value)
        if(!e.target.value.replace(/\s/g,'').length) {
            setError({...error, issue_status:"Please select issue status"});
        } else {
            setError({...error, issue_status:""});

        }
    }
    const valueHandler=(e)=>{
        setitem_Value(e.target.value)
        if(!e.target.value.replace(/\s/g,'').length || !/^\d+$/.test(e.target.value)) {
            setError({...error, item_valuation:"Please enter a valid value"});
        } else {
            setError({...error, item_valuation:""});
        }
    }
    const categoryHandler=(e)=>{
            setitem_category(e.target.value)
            if(!e.target.value.replace(/\s/g,'').length) {
                setError({...error, item_category:"Please select item category"});
            } else {
                setError({...error, item_category:""});
            }
    }
    const makeHandler=(e)=>{
            setitem_make(e.target.value)
            if(!e.target.value.replace(/\s/g,'').length) {
                setError({...error, item_make:"Please select item make"});
            } else {
                setError({...error, item_make:""});

            }
    }
            const submitHandler = (event) => {
                event.preventDefault();
                axios
                   .post(baseURL,{
                        item_id:item_id,
                        item_category:item_category,
                        item_make:item_make,
                        issue_status:issue_status,
                        item_valuation:item_valuation,
                        item_description:item_description
                   })
                   .then((response) => {
                    // alert("Successfully added");
                    navigate("/AdminItemDetails");
                    console.log(response.data);
                   })
                   .catch(error => {
                    // alert("error===" + error)
                   });
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
            
            <div className="whole">
                
            <h2>Add New Item</h2>
            <div className="container">
            
            <form className="centred" onSubmit={submitHandler}>
                <div className="form-group ">
                    <label  className="text-muted" for="email" class="form-label">Item ID:</label>
                    <input className="form-control inputField" type="text" onChange={itemidHandler} value={item_id}required/>
                    <span style={{color:"red"}}>{error.item_id}</span>
                </div>
                
                 <div className="form-group"></div>
                 <label for="email" class="form-label">Item Description:</label>
                 <input class="form-control inputField" type="text" onChange={itemdescrpHandler}value={item_description}required/>
                 <span style={{color:"red"}}>{error.item_description}</span>

                 <div className="form-group">
                 <label for="email" class="form-label">Issue Status:</label>
                 <select id="issue_status" className = "form-control" onChange={issueHandler}value={issue_status}>
                    <option value="">Select..</option>
                    <option value="y">Y</option>
                    <option value="n">N</option>
                 </select>
                 <span style={{color:"red"}}>{error.issue_status}</span>
                 </div>

                 <div className="form-group">
                 <label for="email" class="form-label">Item Category:</label>
                 {/* <input className="inputField" type="text" onChange={categoryHandler}value={item_category}required/> */}
                 <select className="form-control" id="item_category" onChange={categoryHandler} value={item_category}>
                    <option value="">Select..</option>
                    <option value="furniture">Furniture</option>
                    <option value="crockery">Crockery</option>
                 </select>
                 <span style={{color:"red"}}>{error.item_category}</span>
                 </div>
            
                 


                 <div className="form-group">
                 <label for="email" class="form-label">Item Value:</label>
                 <input className="form-control inputField" type="text" onChange={valueHandler}value={item_valuation}required/>
                 <span style={{color:"red"}}>{error.item_valuation}</span>
                 </div>

                
                 <div className="form-group">
                 <label for="email" class="form-label">Item Make:</label>
                 <select id="issue_status" className=  "form-control" onChange={makeHandler} value={item_make}>
                    <option value="">select..</option>
                    <option value="wooden">Wooden</option>
                    <option value="glass">Glass</option>
                 </select>
                 <span style={{color:"red"}}>{error.item_make}</span>
                 </div>
                 <button className="btn btn-primary mt-3" disabled={!submit}>Submit</button>          
    </form></div> </div>)}

export default AdminItem; 