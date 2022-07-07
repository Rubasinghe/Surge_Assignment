import React, {useState} from "react";
import NoteBook from "./NoteBook";
import Welcome from "./Welcome";
import Log from "./Login";
import Admin from './Admin'
import {Route,Routes} from "react-router-dom";
function App() {

  // login 
  const adminUser = {
    email : "admin@admin.com",
    password : "admin123",
  }

  const[user, setUser] = useState({name : "", email : "" });
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");

      setUser({
        name: details.name,
        email:details.email,

      });
    }else {
      console.log("details do not match");
    }
    
  }

  const Logout = () => {
    setUser({name : "", email : "" });
  }


  return(
    <div className="App">

      {(user.email != "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          
        </div>
          
        
      ): (
        <Login Login={Login} error ={error}/>
      )}

    {/* connect pages (routing) */}
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/NoteBook" element={<NoteBook/>}/>
        <Route path="/login" element={<Log/>}/>
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </div>
  
  )


}

export default App;


