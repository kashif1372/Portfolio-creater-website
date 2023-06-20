import React, { useState } from 'react'
import '../App.css'
import AboutNavbar from '../components/AboutNavbar'
import {motion} from "framer-motion"


const About = () => {

    const [slide,setSlide] = useState(false);
    const slideMenu = ()=>{
        setSlide(!slide);
        
    }


  return (
    <>
    <motion.div className="aboutContainer"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.5}}}
    >
        <div className="aboutContainerUp">
            <div className="aboutContainerMenuIconBorder">
            <div onClick={slideMenu} className="aboutContainerMenuIcon">
            <i class="fa-solid fa-bars"></i>
            </div>
            </div>
            
            <div className="aboutContainerUpLeft">
               <div className="aboutContainerUpLeftBorder">
               <img src="./Images/myimg.jpg" alt="" />
               </div>
            </div>
            <div className="aboutContainerUpRight">
                <h1>I'm Kashif Kamil Sheikh</h1>
                <h2>MERN Stack Developer</h2>
                <h3>Developer of this Website</h3>
            </div>
            <div className= {slide ? "aboutNavbarDiv slideAboutNavbar" : "aboutNavbarDiv"}>
            <AboutNavbar/>
            </div>
        </div>
        <div className="aboutContainerDown">
        <div className="aboutContainerDownDetails">
        <div className="aboutContainerDownLeft">
        <i class="fa-solid fa-envelope"></i>
        </div>
        <div className="aboutContainerDownRight">
            <h2>Email</h2>
            <p>kashifsheikh1372@gmail.com</p>
        </div>
        </div>
        <div className="aboutContainerDownDetails">
        <div className="aboutContainerDownLeft">
        <i class="fa-solid fa-location-dot"></i>
        </div>
        <div className="aboutContainerDownRight">
            <h2>Address</h2>
            <p>30, Adarsh Nagar</p>
        </div>
        </div>
        <div className="aboutContainerDownDetails">
        <div className="aboutContainerDownLeft">
        <i class="fa-solid fa-phone"></i>
        </div>
        <div className="aboutContainerDownRight">
            <h2>Phone</h2>
            <p>9307018285</p>
        </div>
        </div>
        </div>
    </motion.div>
    </>
  )
}

export default About