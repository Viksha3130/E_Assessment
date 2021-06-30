import React , {useContext , Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom";
import AuthContext  from '../../context/authContext/authContext'


export const Navbar = () => {
  const {logout , clearError , userAuth , user} = useContext(AuthContext)
  const onLogout =() =>{
    logout()
    clearError()
  } 
  const userLinks = (
    <Fragment>
      <li>Hello , {user && user.username }</li>
      <span className = "sm-hide "> |</span>
      <li>
        <a href="/Home" onClick={onLogout}>
      <span className ="sm-hide logout">Logout</span>
      <FontAwesomeIcon icon="sign-out-alt" pull="right" size="lg" color="white" />
      </a>
      
    
      </li>
    </Fragment>
  )
  const authLinks = (
    <Fragment>
      <li>
      <Link to="/Login" className="lkbtn" >
         Login
           </Link>
    
      </li>
      <span className="sm-hide">|</span>
      <li>
      <Link to="/Signup" className="lkbtn" >   Register
            </Link>
      </li>
   
    </Fragment>
  )
    return (
        <div className="navbar">
      <div className="logo">
        <h1>
          E-Learn
        </h1>
        <p> <span></span></p>
      </div>
      <ul>
             {userAuth ? userLinks : authLinks}
           
       
      </ul>
    </div>
    )
}

export default Navbar