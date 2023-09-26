import React,{useState} from "react";
import "./AdminItem.css"
import {useNavigate} from 'react-router'
import axios from "axios";

function AdminItem(){
    const baseURL="http://localhost:8080/saveItem";
    const [item_id, setitem_id]=useState('');
    const [item_description,setitem_description]=useState('');
    const [issue_status,setissue_status]=useState('');
    const [item_valuation,setitem_Value]=useState('');
    const [item_category,setitem_category]=useState('');
    const [item_make,setitem_make]=useState('');
    const navigate = useNavigate();

    const itemidHandler=(e)=>{
        setitem_id(e.target.value)}
    const itemdescrpHandler=(e)=>{
        setitem_description(e.target.value)}
    const issueHandler=(e)=>{
        setissue_status(e.target.value)}
    const valueHandler=(e)=>{
        setitem_Value(e.target.value)}
    const categoryHandler=(e)=>{
            setitem_category(e.target.value)}
    const makeHandler=(e)=>{
            setitem_make(e.target.value)}
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
                    alert("Successfully added");
                    console.log(response.data);
                    navigate("/AdminItemDetails");
                   })
                   .catch(error => {
                    alert("error===" + error)
                   });
                }
    
        return (
            
            <div className="whole">
            <div className="custom"><h1>Loan Management System</h1>
            <h2>Item Master Data</h2></div>
            <div className="container">
            
            <form className="centred" onSubmit={submitHandler}>
    
                <label for="email" class="form-label">Item ID:</label>
                 <input className="inputField" type="text" onChange={itemidHandler} value={item_id}required/>
                 <label for="email" class="form-label">Item Description:</label>
                 <input class="inputField" type="text" onChange={itemdescrpHandler}value={item_description}required/>
                 <label for="email" class="form-label">Issue Status:</label>
                 <select id="issue_status" onChange={issueHandler}value={issue_status}>
                    <option>select..</option>
                    <option>Y</option>
                    <option>N</option>
                 </select>
            
                 <label for="email" class="form-label">Item Category:</label>
                 <input className="inputField" type="text" onChange={categoryHandler}value={item_category}required/>
                 <label for="email" class="form-label">Item Value:</label>
                 <input className="inputField" type="text" onChange={valueHandler}value={item_valuation}required/>
                 <label for="email" class="form-label">Item Make:</label>
                 <select id="issue_status" onChange={makeHandler} value={item_make}>
                    <option>select..</option>
                    <option>Wooden</option>
                    <option>Glass</option>
                    <option>Plastic</option>
                 </select>
                 
                 <button>Submit</button>          
    </form></div> </div>)}

export default AdminItem; 