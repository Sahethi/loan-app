import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ItemDetails.css'
import EmptyTable from './EmptyTable';
import Navbar from './Navbar';

export default function ItemDetails() {
    const {empID} = useParams();
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const url = `http://localhost:8080/items/${empID}`;
    
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setItems(Array.from(response.data));
            console.log(response.data[0].issue_id);
            console.log(items);
            // console.log(typeof Array.from(response.data));
            // console.log(Array.from(response.data));
        } catch (err) {
            console.log("Error:" + err);
            setErrorMessage("Item Details Empty!");
        }
    };

    useEffect(() => {
        fetchData();
    },[]);
    

  return (
    <div><Navbar />
    <div className='item-details-container'>
      
    <h2>Item Details</h2>

    <div class="row">
            <div class="col-4">Employee ID: {empID}</div>
            <div class="col-4">Designation: {sessionStorage.getItem("designation")}
            </div>
            <div class="col-4">Department: {sessionStorage.getItem("dept")}</div>
        </div>
    <br/>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Issue_id</th>
      <th scope="col">Item Description</th>
      <th scope="col">Item Make</th>
      <th scope="col">Item Category</th>
      <th scope="col">Item Valuation</th>
    </tr>
    {errorMessage && 
      <div className="error-message">
          {EmptyTable(errorMessage)}
      </div>
    }
    {
      items.map((itm,idx)=>(
        <tr>
          <td>{itm.issue_id}</td>
          <td>{itm.item.item_description}</td>
          <td>{itm.item.item_make}</td>
          <td>{itm.item.item_category}</td>
          <td>{itm.item.item_valuation}</td>
        </tr>
      ))
    }

  </thead>
</table>
    </div></div>
  )
}
