import React, {useContext , useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'
import Navbar from '../layouts/Navbar'

 const Studentpage = () => {
     const {getUser} =   useContext(AuthContext)
     useEffect ( () => {
          getUser()
          //eslint-disable-next-line
     }, [])
    return (
        <div>
            <Navbar/>
            Welcome!!
        </div>
    )
}
 export default Studentpage