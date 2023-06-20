import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import "../App.css"
import { userContext } from '../App'


const AboutNavbar = () => {
  const {state} = useContext(userContext);
  if(state){
  return (
    <>
    <div className="homeNavbar">
        <div className="homeNavbarSub">
        <NavLink to='/' className='homeNavbarLink' >Home</NavLink>
        <div className="arrowImageDiv"></div>
        </div>
        <div className="homeNavbarSub">
          <NavLink to='/portfoliomain' className='homeNavbarLink' >Portfolio</NavLink>
          <div className="arrowImageDiv"></div>
          </div>
          <div className="homeNavbarSub">
          <NavLink to='/logout' className='homeNavbarLink' >LogOut</NavLink>
          <div className="arrowImageDiv"></div>
          </div>
    </div>
    </>
  )
      }else{
        return (
          <>
          <div className="homeNavbar">
              <div className="homeNavbarSub">
              <NavLink to='/' className='homeNavbarLink' >Home</NavLink>
              <div className="arrowImageDiv"></div>
              </div>
              <div className="homeNavbarSub">
              <NavLink to='/login' className='homeNavbarLink' >Login</NavLink>
              <div className="arrowImageDiv"></div>
              </div>
              <div className="homeNavbarSub">
              <NavLink to='/register' className='homeNavbarLink' >Registration</NavLink>
              <div className="arrowImageDiv"></div>
              </div>
          </div>
          </>
        )
      }
}

export default AboutNavbar