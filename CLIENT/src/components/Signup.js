import React, { useState , useContext , useEffect} from 'react';
import AuthContext from '../context/authContext/authContext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/Signstyle.css';
import {Link , useHistory } from "react-router-dom";
import Navbar from './layouts/Navbar'
import axios from 'axios';





function Signup(props) {
    let history = useHistory();
  
  
const {registerUser , userAuth , errors , setError , clearError} = useContext(AuthContext)
useEffect(() => {
    if(userAuth){
        props.history.push('/Home')
    }
    } , [userAuth , props.history])

const [user , setUser] = useState({username :'' , email :'' , password:'' , password2:''})
const {username , email , password , password2} = user


const handleChange = (e) => {
  setUser({...user , [e.target.name]: e.target.value})
  clearError()
}
const submit = async e =>
{  
  e.preventDefault()
  if(password!==password2){
    setError({msg:"password dont match"})
  } else {
    registerUser ({username , email , password})
    clearError()

  }
  await axios.post("http://localhost:3003/Registereduser" , user)
  
}

    
  
        return (
            <div>
                <Navbar/>
            <div className={'authbox'}>
            <div className={'leftbox'}>
                <div className={'bgblue'}/>
                <div className={'imageAuth'}>
                <Carousel className="slide">
                <div>
                    <img className="slideimg" src="/images/learning.png" alt="E-learning and E-assesment" />
                    <p className="legend">E-Master Coding and Technology by Practice</p>
                </div>
                <div>
                    <img className="slideimg" src="/images/skill.png" alt="Skill-oriented" />
                    <p className="legend">E-Skilling Tech Proficiency</p>
                </div>
                <div>
                    <img className="slideimg" src="/images/engineering.png" alt="Engineering Education Revolutionized" />
                    <p className="legend">Embryo of Future Learning</p>
                </div>
            </Carousel>
   
                </div>
                
                
              
                <div className={'imageText bold style1'}></div>
                
            </div>
            <div className={'rightbox'}>
                <div className={'box'}>
                <form   onSubmit={submit} >
                    <div className={'titleAuth'}>Register</div>
                         <div className={'inputSBox'}>
                           <input className={'inputS '} type={'text'} placeholder={'Username'}
                                name={'username'}  value={username} onChange={handleChange} />
                               
                         </div>
                            <div className={'inputSBox'}>
                                 <input className="inputS " type="email" placeholder="Email"
                                     name="email"  value={email}  onChange={handleChange}
                                   />
                                    
                        
                             </div>
                          <div className={'inputSBox'}>
                                  <input className="inputS " type="password" placeholder="Password"
                                     name="password" onChange={handleChange}   value={password}
                                     />
                                   
                                 
                      
                             </div>
                             <div className={'inputSBox'}>
                                <input className="inputS " type="password" placeholder="Confirm Password"
                                    name="password2" onChange={handleChange}  value={password2}
                                   /> 
                                    
                        
                                </div>
                   
                         <div className={'contentBox'}>
                               <div className={'btnit '} ><input type="submit" className="btnAuth" onClick={submit} value="Sign Up"/><Link to ='/Login'></Link>
                               </div>
                       
                                  </div>
                   </form>
                    <div className={'borderBox'}>
                        {errors !== null && <button className="danger">
                        {errors.msg ? errors.msg : errors.error[0].msg}<span onClick={() => clearError()}>x</span></button>}
                       
                        <div className={'line'}/>
                        <div className={'text2 or'}>OR</div>
                    </div>
                    
                    <div className={'signin'}>
                        Already have  an account?{""}<Link to="/Login"><button className="lnkbtn">
             Login
            </button>
            </Link>
                    </div>
                </div>
            </div>

            
        </div>
        </div>
        )
                                     
}

export default Signup
