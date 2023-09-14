import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

//Login

function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        // alert("Login Sucessful");
    
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/loginAuth", {
                username: email,
                password: password,
            }).then((res) => {
                console.log(res.data);
                if (res.data == "Invalid username") {
                    alert("Invalid Username");
                } 
                else if(res.data == "Login successful") { 
                    console.log(res)
                   alert("Login Successful!")
                } 
                else { 
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }   
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Login</h2>
                <hr/>
                </div>

                <div class="row">
                <div class="col-sm-6">
 
                    <form>
                        <div class="form-group">
                        <label>Username</label>
                        <input type="text"  class="form-control" id="email" placeholder="Enter Username"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />

                        </div>
                        
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
                            value={password}
                            onChange={(event) => {
                            setPassword(event.target.value);
                            }}
                            />
                        </div>
                    
                        <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
                    </form>
                </div>
            </div>
        </div>
     </div>
    );
  }
  
  export default Login;