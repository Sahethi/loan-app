import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

export default function ItemDetails() {
    const {empID} = useParams();
    // const handleProceed = (e) => {
    //     history.push(`/items/${empID}`);
    // };
    const [items, setItems] = useState({});
    const url = `http://localhost:8080/items/${empID}`;
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setItems(response.data.issue);
            // console.log(items.issue);
        } catch (err) {
            console.log("Error:" + err);
        }
    };

    useEffect(() => {
        fetchData();
    },[items]);
    


  return (
    <div>
    <h2>Item Details</h2>

    <div class="row">
        <div class="col-4">Employee ID:{empID}</div>
        <div class="col-4">Designation:</div>
        <div class="col-4">Department:</div>
    </div>
    <br/>
    <div class="row">
        <div class="col-2">Issue_id</div>
        <div class="col-4">Description</div>
        <div class="col-2">Make</div>
        <div class="col-2">Category</div>
        <div class="col-2">Valuation</div>
    </div>
    </div>
  )
}
