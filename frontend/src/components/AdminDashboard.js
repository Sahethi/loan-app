import React from 'react'
import './AdminDashboard.css'
import customerDataPic from './images/customerDataAdmin.png'
import itemAdmin from './images/itemAdmin.png'
import loanCardAdmin from './images/loanCardAdmin.png'
function AdminDashboard(){
    const handleLogout=()=>{
        sessionStorage.removeItem('adminSessionId');
    }
    return(
        <div class="bckimage" style={{ height: '100%', width: '100%', position: 'absolute'}}>
        <div class="menu center">
            <h3 class="center">LOAN MANAGEMENT APPLICATION</h3>
            <h4 class="center">Admin Dashboard</h4><br></br>
            <div class="choiceTile">
            <a href={`http://localhost:3000/adminEmployee/`} class="linkStyle"><img src={customerDataPic} alt="Customer Data Management" class="choiceIcon"/>Customer Data Management</a>
            </div>
            <div class="choiceTile">
            <a href={`http://localhost:3000/adminLoan/`} class="linkStyle"><img src={loanCardAdmin} alt="Loan Card Management" class="choiceIcon"/>Loan Card Management</a>
            </div>
            <div class="choiceTile">
            <a href={`http://localhost:3000/AdminItemDetails/`} class="linkStyle"><img src={itemAdmin} alt="Item Master Data" class="choiceIcon"/>Item Master Data</a>
            </div>
            <div><a href="http://localhost:3000/admin/login" onClick={handleLogout}>Logout</a></div>
        </div>
        </div>
    )
}
export default AdminDashboard;