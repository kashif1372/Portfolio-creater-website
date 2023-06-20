import React, { useContext, useState } from 'react'
import ShortNavbar from '../components/ShortNavbar'
import ShortNavbarMobile from '../components/ShortNavbarMobile';
import { NavLink, useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import { userContext } from '../App';


const Login = () => {

    const {dispatch} = useContext(userContext);

    const data = {
        classNameNavbar:"loginNavbar"
    };

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email:"",password:""
    })

    let name,value;
    const handleInputs = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setUser({...user,[name]:value})
    }

    const loginData = async (event) =>{
        event.preventDefault();
        const {email,password} = user;

        const response = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        
        if(response.status===200){
            dispatch({type:"USER",payload:true})
            navigate("/")
        }
        
        if(response.status===400){
            window.alert("Invalid Credentials")
            navigate("/login")
            
        }
    }

  return (
    <>
    
    <motion.div className="loginContainer"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
    >
        <div className="shortNavbarMenuIconLogin">
            <ShortNavbarMobile/>
        </div>
        <div className="loginContainerLeft">
            <div className="loginForm">
            <h1>LogIn</h1>
            <form>
                <input className='formInput' name='email' onChange={handleInputs} type="text" placeholder='Enter Email' />
                <input className='formInput' name='password' onChange={handleInputs} type="password" placeholder='Enter Password' />
                <button className='btn' onClick={loginData}>LogIn</button>
            </form>
            <div className="formBottomLinkDiv">
                <NavLink to="/register" className="formBottomLink">Don't have an Account</NavLink>
                </div>
            </div>
        </div>
        <div className="loginContainerRight">
            <ShortNavbar {...data}/>
        </div>
    </motion.div>
    </>
  )
}

export default Login