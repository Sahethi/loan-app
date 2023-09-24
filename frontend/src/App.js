import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ItemDetails from "./components/ItemDetails";
import LoanDetails from "./components/LoanDetails";
import LoanCard from "./components/LoanCard";
import UserDashboard from "./components/UserDashboard";
import AdminItem from "./components/AdminItem";
import AdminItemDetails from "./components/AdminItemDetails";
import AdminEditItem from "./components/AdminEditITem";

import AdminDashboard from "./components/AdminDashboard";
import AdminAddLoan from "./components/AdminAddLoan";
import AddEmployee from "./components/admin/AddEmployee";
import AdminLogin from "./components/AdminLogin"
import AdminLoanManagement from "./components/AdminLoanManagement";
import AdminEmployeeManagement from "./components/AdminEmployeeManagement";
import AdminEditLoan from "./components/AdminEditLoan";
import AdminEditEmployee from "./components/AdminEditEmployee";


// session management code
// useEffect (() => {
//   let authData = sessionStorage.getItem('authData');
//   if(authData == null ){

//   }
// })

function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/login" element= { <Login/>} />
              <Route path="/employees/:empID" element= { <Login/>} />
              <Route path="/register" element={ <Register/>}/>
              <Route path="/applyloan" element={ <ApplyLoan/>}/>
              <Route path="/items/:empID" element={<ItemDetails/>} />
              <Route path="/loans/:empID" element={<LoanDetails/>} />
              <Route path ="/loan-cards" element = {<LoanCard/>} />
              <Route path="/UserDashboard" element={<UserDashboard/>}/>
              <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
              <Route path="/AdminAddLoan" element={<AdminAddLoan/>}/>
                <Route path ="/loan-cards" element = {<LoanCard/>} />
             <Route path="/UserDashboard" element={<UserDashboard/>}/>

             <Route path="/AdminItem" element={<AdminItem/>}/>
             <Route path="/AdminItemDetails" element={<AdminItemDetails/>}/>
             <Route path="/AdminEditITem/:item_id" element={<AdminEditItem/>}/>

             <Route path="/admin/adduser" element={<AddEmployee/>}/>
             <Route path="/adminLoan" element={<AdminLoanManagement/>}/>
             <Route path="/adminEmployee" element={<AdminEmployeeManagement/>}/>
              <Route path="/adminEditLoan/:loanID" element={<AdminEditLoan/>} />
              <Route path="/adminEditEmployee/:employeeID" element={<AdminEditEmployee/>} />
              <Route path="/admin/login" element={<AdminLogin/>}/>

            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
