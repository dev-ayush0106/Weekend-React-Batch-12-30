import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/support">Support</Link></li> */}
            <li><NavLink to="/" className={({isActive})=> isActive?"text-c":""}>Home</NavLink></li>
            <li><NavLink to="/courses" className={({isActive})=> isActive?"text-c":""}>Courses</NavLink></li>
            <li><NavLink to="/support" className={({isActive})=> isActive?"text-c":""}>Support</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
