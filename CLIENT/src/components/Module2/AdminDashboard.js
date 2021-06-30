
import React , { useState, useEffect} from 'react';
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin from './Admin.css'
import {Link } from "react-router-dom";
import {
  Card,  CardBody,
  CardTitle,  Button
} from 'reactstrap';
import axios from 'axios';








const AdminDashboard =() => {

    const [Registereduser , setUser] = useState([]);
    const [search , setSearch] = useState('')
  


    useEffect(() => {
      loadUsers();
    
    }, []);

    const loadUsers = async() => {
           const results = await axios.get('http://localhost:3003/Registereduser');
           setUser(results.data)
    } 
 
     const filterRegisteruser =  Registereduser.filter( users => {
     return   users.username.toLowerCase().includes(search.toLowerCase())
     })
 
  
      return (
        <div>
             <Slidebar/>
             <AdminNavbar/>
             <div className="container ">
               <div className="row">
                 <div className="col-xl-6 col-sm-6 mb-4">
                 <Card>
         
                       <CardBody>
                             <CardTitle>Test Available</CardTitle>
            
                                  <Button className="bt"><Link to='/View-test' className="bt">View Details</Link></Button>
                          </CardBody>
                  </Card>
     
                 </div>
                 <div className="col-xl-6 col-sm-6 mb-4">
                 <Card>
         
          <CardBody>
            <CardTitle>Performance of Users</CardTitle>
            
            <Button className="bt">View Details</Button>
          </CardBody>
        </Card>
     
                 </div>
               </div>
             </div>
             <div className="container">
             <Card>
         
         <CardBody>
           
           <CardTitle><FontAwesomeIcon className="user" icon="users"  size="1x" color="black"></FontAwesomeIcon>Registered Users
            <input type="text" className="search" placeholder="Search"   onChange={e => setSearch(e.target.value)}/>
            </CardTitle>

           <table className="table border shadow" >
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        
      </tr>
    </thead>
    <tbody >
      {filterRegisteruser.map((user , index) => 
      <tr>
        <th scope="row">{index +1}</th>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
        )}
    </tbody>
    </table>
           
         </CardBody>
       </Card>
  
             </div>
        </div>
  
      )

    

   

    
  }

export default AdminDashboard

