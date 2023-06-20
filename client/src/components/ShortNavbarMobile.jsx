import React from 'react'
import { NavLink } from 'react-router-dom'

const ShortNavbarMobile = () => {
  return (
    <div className="shortNavbarMobileContainer" >
        <NavLink to='/' className='shortNavbarMobileLink' >Home</NavLink>
        <NavLink to='/about' className='shortNavbarMobileLink' >About Me</NavLink>
    </div>
  )
}

export default ShortNavbarMobile