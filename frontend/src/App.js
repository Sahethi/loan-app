import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ItemDetails from "./components/ItemDetails";
import LoanDetails from "./components/LoanDetails";
import LoanCard from "./components/LoanCard";
import UserDashboard from "./components/UserDashboard"
import AdminDashboard from "./components/AdminDashboard";
import AdminAddLoan from "./components/AdminAddLoan"
import AddEmployee from "./components/admin/AddEmployee";
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
             <Route path="/admin/adduser" element={<AddEmployee/>}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
