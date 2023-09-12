import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;