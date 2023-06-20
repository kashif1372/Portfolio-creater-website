import React, { useState } from 'react'
import {motion} from "framer-motion"
import { NavLink, useNavigate } from 'react-router-dom'

const PortfolioDetails = () => {

    const navigate = useNavigate();

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

    const response = await fetch('/portfoliodetails',{
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
        window.alert("Invalid")
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
                    <input type="text" onChange={handleInputs} name='board10' />
                    <input type="text" onChange={handleInputs} name='passingyear10' />
                    <input type="text" onChange={handleInputs} name='score10' />
                    <input type="text" onChange={handleInputs} name='board12' />
                    <input type="text" onChange={handleInputs} name='passingyear12' />
                    <input type="text" onChange={handleInputs} name='score12' />
                    <input type="text" onChange={handleInputs} name='degree01' />
                    <input type="text" onChange={handleInputs} name='degree01passingyear' />
                    <input type="text" onChange={handleInputs} name='degree01score' />
                    <input type="text" onChange={handleInputs} name='degree02' />
                    <input type="text" onChange={handleInputs} name='degree02passingyear' />
                    <input type="text" onChange={handleInputs} name='degree02score' />
                    <input type="text" onChange={handleInputs} name='degree03' />
                    <input type="text" onChange={handleInputs} name='degree03passingyear' />
                    <input type="text" onChange={handleInputs} name='degree03score' />
                </div>
            </form>
        </div>
        <div className="portfolioDetailsMainSubDivRight">
            <div className="textareaDiv">
                <h2>Skills</h2>
                <textarea rows="7" onChange={handleInputs} name='skills'></textarea>
            </div>
            <div className="textareaDiv">
                <h2>Experience</h2>
                <textarea rows="7" onChange={handleInputs} name='experience'></textarea>
            </div>
            <div className="textareaDiv">
                <h2>Projects</h2>
                <textarea rows="7" onChange={handleInputs} name='projects'></textarea>
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

export default PortfolioDetails