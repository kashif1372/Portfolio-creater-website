import React, { useState } from 'react'
import ShortNavbar from '../components/ShortNavbar'
import ShortNavbarMobile from '../components/ShortNavbarMobile';
import { NavLink, useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"


const Register = () => {

    const navigate = useNavigate();

    const data = {
        classNameNavbar:"RegisterNavbar"
    };

    const [user,setUser] = useState({
        name:"",email:"",number:"",password:"",cpassword:""
    })

    let name,value;
    const handleInputs = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setUser({...user,[name]:value})
    }

    const registerData = async (event) =>{
        event.preventDefault();
        const {name,email,number,password,cpassword} = user;

        const response = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,number,password,cpassword
            })
        });


        if(response.status===200){
            navigate("/login")
        }

        if(response.status===401){
            window.alert("Plz fill all the details")
            navigate("/register")
        }

        if(response.status===402){
            window.alert("Email already exist")
            navigate("/register")
        }

        if(response.status===400){
            window.alert("Passwords are not matching")
        }
    }






  return (
    <>
    <motion.div className="registerContainer"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
    >
        <div className="registerNavbarMobile">
            <ShortNavbarMobile/>
        </div>
        <div className="registerContainerLeft">
            <ShortNavbar {...data}/>
        </div>

        <div className="registerContainerRight">
            <div className="loginForm">
                <h1>Register</h1>
                <form method='POST'>
                    <input className='formInput' name='name' type="text" onChange={handleInputs} placeholder='Enter Your Name' />
                    <input className='formInput' name='email' type="email" onChange={handleInputs} placeholder='Enter Your Email' />
                    <input className='formInput' name='number' type="text" onChange={handleInputs} placeholder='Enter Your Number' />
                    <input className='formInput' name='password' type="password" onChange={handleInputs} placeholder='Enter Password' />
                    <input className='formInput' name='cpassword' type="password" onChange={handleInputs} placeholder='Confirm Password' />
                    <button className='btn' onClick={registerData}>Register</button>
                </form>
                <div className="formBottomLinkDiv">
                <NavLink to="/login" className="formBottomLink">Already have an Account</NavLink>
                </div>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Register