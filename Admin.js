import React, {useState} from 'react';
import './admin.css';
import LoginData from "./login-data.json";


export default function Admin() {

    const[contacts, setContacts]  = useState(LoginData)

  return (
    // create table
    
    <div className='table'>
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email Address</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=> (
                    <tr>
                        <td>{contact.userName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.password}</td>
                    </tr>
                    
                ))}
                

            </tbody>
        </table>

    </div>
  )
}
