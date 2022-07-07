import React, {useState} from 'react';
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserLock} from '@fortawesome/free-solid-svg-icons'

export default function Login({Login,error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }


  return (
    //create login form
    <form className='form' action="http://localhost:8000/api/signin" method='POST'>

        

        <div className='form-inner'>
            <h2>Login</h2>
            {/* ERROR! */}

            <div className='form-group'>
                <label htmlFor='name'>Name : </label>
                <input type="text" name = "userName" id= "userName" onChange ={e=>setDetails({...details, name: e.target.value})} value = {details.name}/>
            </div>

            <div className='form-group'>
            <label htmlFor='email'>Email : </label>
            <input type="email" name = "email" id= "email" onChange ={e=>setDetails({...details, email: e.target.value})} value = {details.email}/>
            </div>

            <div className='form-group'>
            <label htmlFor='password'>Password : </label>
            <input type="password" name = "password" id= "password" onChange ={e=>setDetails({...details, password: e.target.value})} value = {details.password}/>
            </div>

            <input type="submit" value="LOGIN"/>

            <FontAwesomeIcon className='lock' icon={faUserLock} />

        </div>

    </form>
    
  )
}

