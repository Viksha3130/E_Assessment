import React, { useState , useContext , useEffect } from 'react';
import AuthContext from '../context/authContext/authContext'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/Logstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom";
import Navbar from './layouts/Navbar'



function Login (props) {
    const {loginUser , userAuth , errors , clearError} = useContext(AuthContext)
    useEffect(() => {
        if(userAuth){
            props.history.push('/StudentPage')
        }
        } , [userAuth , props.history])
const [user , setUser] = useState({ email :'' , password:'' })
const { email , password } = user

const handleChange = (e) => {
  setUser({...user , [e.target.name]: e.target.value})
  clearError()
}
const submit = e =>{
  e.preventDefault()
  loginUser({email , password})
  clearError()
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
                    <form  onSubmit={submit}>
                        <div className={'titleAuth'}>Login</div>
                        <div className={'inputSBox'}>
                        <input className="inputS "  
                        type="email" placeholder="Email"
                        name="email" value={email}  onChange={handleChange} required
                     
                      />
                        
                    </div>
                        <div className={'inputSBox password'}>
                            <input className="inputS  " type="password" placeholder="Password" name="password" 
                            value={password}  onChange={handleChange}
             
                />
                         
                        </div>
                        <div className={'contentBoxz'}>
                        <div className={'btnit '} ><input type="submit" className="btnAuth"    onClick={submit}   value="Login"/></div>
                          
                        </div>
                     </form>
                        <div className={'borderBox'}>
                        {errors !== null && <button className="danger">
                        {errors.msg ? errors.msg : errors.error[0].msg}<span onClick={() => clearError()}>x</span></button>}
                            <div className={'line'}/>
                            <div className={'text2 or'}>OR</div>
                        </div>
                        <div className={'log'}>
                            Don't have  an account?{""} <Link to="/Signup"><button className="lnkbtn" >
              Signup
            </button>
            </Link>
                        </div>
                        <div className={'socialMediaBox'}>
                                    sign in via
                                <div className={"row "}>
                                    <div className={"col-6 col-sm-6 icAUth google align-self-center"} >
                                  
                                      <a className="btn" href="https://www.google.com/accounts/ManageAccount">
                                         <FontAwesomeIcon icon={['fab', 'google']}  color="red" size="3x"   />
                                      </a>
                                    </div>
                            
                                       <div className={"col-6 col-sm-6 icAUth facebook"}>
                                           <a className="btn" href="https://www.facebook.com/">
                                                   <FontAwesomeIcon icon={['fab', 'facebook']} pull="left" color="blue" size="3x"/>
                                            </a>
                                        </div>
                          
                                </div>
                            
                        </div>
                       
                    </div>
                </div>

                
            </div>
            </div>
        )
    
}


export default Login
