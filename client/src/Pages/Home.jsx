import React, { useState } from 'react';
import '../App.css';
import Logo from '../components/Logo';
import HomeNavbar from '../components/HomeNavbar';
import {motion} from "framer-motion"


const Home = () => {

    const [slide,setSlide] = useState(false);
    const slideMenu = ()=>{
        setSlide(!slide);
        
    }
  return (
    <>
    <motion.div className="homeContainer"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
    >
        <div className="homeContainerLeft">
            <div className="homeLogo">
                <Logo/>
            </div>
            <div className="homeContainerLeftMenuIconBorder">
            <div onClick={slideMenu} className="homeContainerLeftMenuIcon">
            <i class="fa-solid fa-bars"></i>
            </div>
            </div>
            
            <div className="homeHeading">
                <h1>Make your  <br /> <span>PORTFOLIO</span> <br /> within a moment</h1>
            </div>
        </div>
        <div className={slide ? "homeContainerRight homeNavbarSlide" : "homeContainerRight"}>
            <HomeNavbar/>
        </div>
    </motion.div>
    </>
  )
}

export default Home