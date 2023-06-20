import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const Logout = () => {
    const {dispatch} = useContext(userContext)
    const navigate = useNavigate ();


    const logoutFunc = async()=>{
        await fetch("/logout",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        dispatch({type:"USER",payload:false})
        navigate("/")
        
    }

    useEffect(() => {
        logoutFunc();
      })


  return (
    <div>Logout</div>
  )
}

export default Logout