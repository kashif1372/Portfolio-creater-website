import React, { useState, useEffect } from 'react'
import {motion} from "framer-motion"
import { NavLink, useNavigate } from 'react-router-dom'

const PortfolioEditDetails = () => {

    const navigate = useNavigate();
    let data;

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
  
        data = await res.json();
        
        setUserData({...userData,
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
        window.alert("Invalid access detected");
        console.log(error);
      }
    }
  
    useEffect(() => {
      loadData();
    })


    const [eduData,setEduData] = useState({
        board10:"",passingyear10:"",score10:"",
        board12:"",passingyear12:"",score12:"",
        degree01:"",degree01passingyear:"",degree01score:"",
        degree02:"",degree02passingyear:"",degree02score:"",
        degree03:"",degree03passingyear:"",degree03score:"",
        skills:"",experience:"",projects:""
    })


const postData = async (event) =>{

    event.preventDefault();
    const {
        board10,passingyear10,score10,
        board12,passingyear12,score12,
        degree01,degree01passingyear,degree01score,
        degree02,degree02passingyear,degree02score,
        degree03,degree03passingyear,degree03score,
        skills,experience,projects
    } = eduData;

    const response = await fetch('https://portfolio-mern-project-01-host.onrender.com/portfolioeditdetails',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            board10,passingyear10,score10,
            board12,passingyear12,score12,
            degree01,degree01passingyear,degree01score,
            degree02,degree02passingyear,degree02score,
            degree03,degree03passingyear,degree03score,
            skills,experience,projects
        })
    })

    if(response.status===400){
        window.alert("Invalid Attempt")
    }else{
        navigate("/")
    }

}


let name,value;
const handleInputs = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setEduData({...eduData,[name]:value})
}

  return (
    <>
    <motion.div className="portfolioDetailsMain"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.5}}}
    >
    <div className="portfolioDetailsMainDiv">
        <div className="portfolioDetailsMainSubDivLeft">
            <h2>Education Details</h2>
            <form>

                <div className="portfolioFormLeft">
                    <h3>10th Board</h3>
                    <h3>Passing Year</h3>
                    <h3>10th Score</h3>
                    <h3>12th Board</h3>
                    <h3>Passing Year</h3>
                    <h3>12th Score</h3>
                    <h3>Degree 01</h3>
                    <h3>Passing Year</h3>
                    <h3>Score</h3>
                    <h3>Degree 02</h3>
                    <h3>Passing Year</h3>
                    <h3>Score</h3>
                    <h3>Degree 03</h3>
                    <h3>Passing Year</h3>
                    <h3>Score</h3>

                </div>
                <div className="portfolioFormRight">
                    <input type="text" placeholder={userData.board10} onChange={handleInputs} name='board10' />
                    <input type="text" placeholder={userData.passingyear10} onChange={handleInputs} name='passingyear10' />
                    <input type="text" placeholder={userData.score10} onChange={handleInputs} name='score10' />
                    <input type="text" placeholder={userData.board12} onChange={handleInputs} name='board12' />
                    <input type="text" placeholder={userData.passingyear12} onChange={handleInputs} name='passingyear12' />
                    <input type="text" placeholder={userData.score12} onChange={handleInputs} name='score12' />
                    <input type="text" placeholder={userData.degree01} onChange={handleInputs} name='degree01' />
                    <input type="text" placeholder={userData.degree01passingyear} onChange={handleInputs} name='degree01passingyear' />
                    <input type="text" placeholder={userData.degree01score} onChange={handleInputs} name='degree01score' />
                    <input type="text" placeholder={userData.degree02} onChange={handleInputs} name='degree02' />
                    <input type="text" placeholder={userData.degree02passingyear} onChange={handleInputs} name='degree02passingyear' />
                    <input type="text" placeholder={userData.degree02score} onChange={handleInputs} name='degree02score' />
                    <input type="text" placeholder={userData.degree03} onChange={handleInputs} name='degree03' />
                    <input type="text" placeholder={userData.degree03passingyear} onChange={handleInputs} name='degree03passingyear' />
                    <input type="text" placeholder={userData.degree03score} onChange={handleInputs} name='degree03score' />
                </div>
                
            </form>
        </div>
        <div className="portfolioDetailsMainSubDivRight">
            <div className="textareaDiv">
                <h2>Skills</h2>
                <textarea rows="7" onChange={handleInputs} placeholder={userData.skills} name='skills'></textarea>
            </div>
            <div className="textareaDiv">
                <h2>Experience</h2>
                <textarea rows="7" onChange={handleInputs} placeholder={userData.experience} name='experience'></textarea>
            </div>
            <div className="textareaDiv">
                <h2>Projects</h2>
                <textarea rows="7" onChange={handleInputs} placeholder={userData.projects} name='projects'></textarea>
            </div>
        </div>
    </div>

    <div className="portfolioMenu">
        <NavLink to="/" className="portfolioMenuLink">Home</NavLink>
        <NavLink onClick={postData} className="portfolioMenuLink">Submit</NavLink>
    </div>
    </motion.div>
    
    </>
  )
}

export default PortfolioEditDetails