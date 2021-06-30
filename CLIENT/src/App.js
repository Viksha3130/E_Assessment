import React from 'react';
import  icon from "./components/Fontawesomeicons/icon.js";
import Home from "./components/pages/Home";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import AuthState from './context/authContext/AuthState'

import './App.css';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Studentpage from './components/pages/Studentpage.js';
import PrivateRoute from '../src/components/pages/routes/PrivateRoute'
import setToken from '../src/utils/setToken'
import AdminDashboard from '../src/components/Module2/AdminDashboard'
import CreateTest from '../src/components/Module2/CreateTest'
import Question from './components/Module2/Question'
import ViewTest from './components/Module2/ViewTest'




if(localStorage.token ){
  setToken(localStorage.token)
}

  
function App() {
  return (
   
    <div className="App">
      <AuthState>
      <Router>
        <div>
        
     
        <Switch>
          <PrivateRoute exact path = '/Home' component ={Home}/>
          <Route exact path = '/Signup' component ={Signup}/>
          <Route exact path = '/login' component ={Login}/>
          <Route exact path = '/Studentpage' component ={Studentpage}/>
          <Route exact path = '/Admin-dashboard' component ={AdminDashboard}/>
          <Route exact path = '/Create-test' component ={CreateTest}/>
          <Route exact path = '/View-test' component ={ViewTest}/>
          <Route exact path = '/Question' component ={Question}/>
          
          

        </Switch>
        </div>
      </Router>
      </AuthState>
       
         
         
    </div>
  );
}

export default App;
