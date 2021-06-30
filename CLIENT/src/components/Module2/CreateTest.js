import React, { Component } from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'

export class CreateTest extends Component {
    render() {
        return (
            <div>
                      <Slidebar/>
           <AdminNavbar/>
        
            
                  <h4 >Create Test</h4> 
            </div>
        )
    }
}

export default CreateTest
