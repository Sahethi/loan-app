import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ApplyLoan from "./components/ApplyLoan";
import ItemDetails from "./components/ItemDetails";
function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/login" element= { <Login/>} />
              <Route path="/register" element={ <Register/>}/>
              <Route path="/applyloan" element={ <ApplyLoan/>}/>
              <Route path="/items/:empID" element={<ItemDetails/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;