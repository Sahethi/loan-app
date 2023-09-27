import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import EmptyTable from './EmptyTable';

export default function AdminItemDetails() {
    //const {empID} = useParams();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const url = `http://localhost:8080/items`;
    const deleteitem = item_id => async() => {
        try{
            const response = await axios.get("http://localhost:8080/deleteitem/"+item_id);
            console.log("http://localhost:8080/deleteitem/"+item_id);
            alert("Item Deleted");
            window.location.reload(false)
        } catch(err){console.log(err);}
    };
    
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setItems(Array.from(response.data));
            console.log(response.data[0].item_id);
            console.log(items);
            console.log(response.data)
        } catch (err) {
            console.log("Error:" + err);
            setErrorMessage("Item List Empty!");
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    const AddItems=()=>{
      navigate("/AdminItem")
    }
    
  return (
    <div>
    <h2>Item Details</h2>
    
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Item_id</th>
      <th scope="col">Item Description</th>
      <th scope="col">Item Make</th>
      <th scope="col">Item Category</th>
      <th scope="col">Item Valuation</th>
      <th scope="col">Issue Status</th>
      <th acope="col">Actions</th>
      {errorMessage && 
        <div className="error-message">
            {EmptyTable(errorMessage)}
        </div>
      }
    </tr>
    {
      items.map((itm,idx)=>(
        <tr>
          <td>{itm.item_id}</td>
          <td>{itm.item_description}</td>
          <td>{itm.item_make}</td>
          <td>{itm.item_category}</td>
          <td>{itm.item_valuation}</td>
          <td>{itm.issue_status}</td>
          <td>
                        <button><Link to={"/AdminEditItem/"+itm.item_id}>Edit</Link></button><br></br>
                        <button onClick={deleteitem(itm.item_id)}>Delete</button>
                    </td>
        </tr>
      ))
    }

  </thead>
</table>
    </div>
  )
}
