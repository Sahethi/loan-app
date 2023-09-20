import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

export default function AdminItemDetails() {
    //const {empID} = useParams();
    const [items, setItems] = useState([]);
    const url = `http://localhost:8080/displayAdminItems`;
    
    const fetchData = async() => {
        try{
            const response = await axios(url);
            setItems(Array.from(response.data));
            console.log(response.data[0].item_id);
            console.log(items);
            console.log(response.data)
            // console.log(typeof Array.from(response.data));
            // console.log(Array.from(response.data));
        } catch (err) {
            console.log("Error:" + err);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);
    

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
    </tr>
    {
      items.map((itm,idx)=>(
        <tr>
          <td>{itm.item_id}</td>
          <td>{itm.item_description}</td>
          <td>{itm.item_make}</td>
          <td>{itm.item_category}</td>
          <td>{itm.item_value}</td>
          <td>{itm.issue_status}</td>
        </tr>
      ))
    }

  </thead>
</table>
    </div>
  )
}
