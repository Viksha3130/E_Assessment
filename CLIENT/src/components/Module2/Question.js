import React, { Component } from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'


export class Question extends Component {
    render() {
        return (
            <div>
                  <Slidebar/>
           <AdminNavbar/>
        
                <h4>Question Section</h4>
            </div>
        )
    }
}

export default Question
