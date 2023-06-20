import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import "../App.css"
import { userContext } from '../App';


const HomeNavbar = () => {


  let {state} = useContext(userContext);
  // let state = true;

  if(state){
    return  (
      <>
      <div className="homeNavbar">
          <div className="homeNavbarSub">
          <NavLink to='/about' className='homeNavbarLink' >About Me</NavLink>
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
    return  (
      <>
      <div className="homeNavbar">
          <div className="homeNavbarSub">
          <NavLink to='/about' className='homeNavbarLink' >About Me</NavLink>
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

export default HomeNavbar