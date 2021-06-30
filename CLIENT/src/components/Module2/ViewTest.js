import React, { Component } from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'

export class ViewTest extends Component {
    render() {
        return (
            <div>
                  <Slidebar/>
           <AdminNavbar/>
        
                     <h4>Test Available</h4>
            </div>
        )
    }
}

export default ViewTest
