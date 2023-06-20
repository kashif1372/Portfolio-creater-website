import React from 'react'
import { NavLink } from 'react-router-dom'

const ShortNavbar = ({classNameNavbar}) => {
  return (
    <div className={`homeNavbar ${classNameNavbar}`} >
        <div className="homeNavbarSub ">
        <NavLink to='/' className='homeNavbarLink' >Home</NavLink>
        </div>

        <div className="homeNavbarSub">
        <NavLink to='/about' className='homeNavbarLink' >About Me</NavLink>
        </div>
    </div>
  )
}

export default ShortNavbar