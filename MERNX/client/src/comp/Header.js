import React from 'react'

import { NavLink } from 'react-router-dom'
function Header() {
    const mystyle = {
        color: "white",
        textDecoration:"none"
    
      };
    let auth=localStorage.getItem('login')
  return (
   
    <div className='App bg-dark text-light'>
        <nav >
            <NavLink style={mystyle}  to='/'>Home</NavLink>&nbsp;&nbsp;&nbsp;
            {
                auth ? <> 
                <NavLink style={mystyle}  to='/Logout'>Logout</NavLink>&nbsp;&nbsp;&nbsp;
                <NavLink style={mystyle}  to='/AddStudent'>Add Student</NavLink>
                </>: <NavLink style={mystyle}  to='/Login'>Login</NavLink>
            }
           
        </nav>
    </div>
  )
}

export default Header