import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"


const PortfolioMain = () => {

  const [userData,setUserData] = useState({});

  const loadData = async ()=>{
    try {
      const res = await fetch("/portfoliomain",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();

      setUserData(data);

    } catch (error) {
      window.alert("Invalid access detected");
      console.log(error);
    }
  }   

  const loadData2 = async ()=>{
    try {
      const res = await fetch("/portfoliomain",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();

      setUserData({...userData,
        name:data.name,
        email:data.email,
        number:data.number,
        board10 : data.eduDetails.board10,
        passingyear10 : data.eduDetails.passingyear10,
        score10 : data.eduDetails.score10,
        board12 : data.eduDetails.board12,
        passingyear12 : data.eduDetails.passingyear12,
        score12 : data.eduDetails.score12,
        degree01 : data.eduDetails.degree01,
        degree01passingyear : data.eduDetails.degree01passingyear,
        degree01score : data.eduDetails.degree01score,
        degree02 : data.eduDetails.degree02,
        degree02passingyear : data.eduDetails.degree02passingyear,
        degree02score : data.eduDetails.degree02score,
        degree03 : data.eduDetails.degree03,
        degree03passingyear : data.eduDetails.degree03passingyear,
        degree03score : data.eduDetails.degree03score,
        skills : data.eduDetails.skills,
        experience : data.eduDetails.experience,
        projects : data.eduDetails.projects}
        );

    } catch (error) {
      console.log(error);
    }
  }   

  useEffect(() => {
    loadData();  
    loadData2();
    // eslint-disable-next-line
  },[])
  

  return (
    <>
    <motion.div className= {userData.board10 ? "portfoliomaindiv" : "portfoliomaindiv displayNone"}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}>
        <div className="portfolioDiv">
          <div className="portfolioDivLeft">
            <h2>Details</h2>
            <div className="portfolioDivLeftSub">
              <h3>Name : {userData.name}</h3>
              <h3>Email : {userData.email}</h3>
              <h3>Mobile No. : {userData.number}</h3>
            </div>
            <h2>Education Details</h2>
            <div className="portfolioDivLeftSub">
              <h3>10th</h3>
              <h4>Board : {userData.board10}</h4>
              <h4>Passing Year : {userData.passingyear10}</h4>
              <h4>Score : {userData.score10}</h4>
            </div>
            <div className="portfolioDivLeftSub">
              <h3>12th</h3>
              <h4>Board : {userData.board12}</h4>
              <h4>Passing Year : {userData.passingyear12}</h4>
              <h4>Score : {userData.score12}</h4>
            </div>
            <div className= {userData.degree01 ? "portfolioDivLeftSub" : "portfolioDivLeftSub displayNone"} >
              <h3>Degree</h3>
              <h4>Name : {userData.degree01}</h4>
              <h4>Passing Year : {userData.degree01passingyear}</h4>
              <h4>Score : {userData.degree01score}</h4>
            </div>
            <div className={userData.degree02 ? "portfolioDivLeftSub" : "portfolioDivLeftSub displayNone"}>
              <h3>Degree</h3>
              <h4>Name : {userData.degree02}</h4>
              <h4>Passing Year : {userData.degree02passingyear}</h4>
              <h4>Score : {userData.degree02score}</h4>
            </div>
            <div className={userData.degree03 ? "portfolioDivLeftSub" : "portfolioDivLeftSub displayNone"}>
              <h3>Degree</h3>
              <h4>Name : {userData.degree03}</h4>
              <h4>Passing Year : {userData.degree03passingyear}</h4>
              <h4>Score : {userData.degree03score}</h4>
            </div>
          </div>
          <div className="portfolioDivRight">
            <div className="portfolioDivRightSub">
            <h3>Skills</h3>
            <h4>{userData.skills}</h4>
            </div>
            <div className="portfolioDivRightSub">
            <h3>Experience</h3>
            <h4>{userData.experience}</h4>
            </div>
            <div className="portfolioDivRightSub">
            <h3>Projects</h3>
            <h4>{userData.projects}</h4>
            </div>
           </div>
        </div>
        <div className="portfolioMenu">
        <NavLink to="/" className="portfolioMenuLink">Home</NavLink>
        <NavLink to="/portfolioeditdetails" className="portfolioMenuLink">Edit Portfolio</NavLink>
    </div>
    </motion.div>

    <motion.div className= {userData.board10 ? "portfoliomaindiv displayNone" : "portfoliomaindiv"}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0,transition:{duration:0.5}}}>
          <div className="portfoliomainshow01 hidePort">
            <h1>Hii, {userData.name}</h1>
              <h1>Oops, It seems you have not created your portfolio yet !!</h1>
              <div className="portfolioLinkDiv">
              <NavLink to="/" className="portfolioLink">Home</NavLink>
              <NavLink to="/portfoliodetails" className="portfolioLink">Create Portfolio</NavLink>
              </div>
          </div>
      </motion.div>
    </>
  )
}

export default PortfolioMain