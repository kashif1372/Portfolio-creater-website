const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')
const User = require("./userSchema");
const bodyParser = require("body-parser"); 
const path = require("path");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://user:mk1234mk1234@cluster01.cvlyuq1.mongodb.net/",{
    dbName:"DataBase02",
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull")
}).catch((error)=>{
    console.log("No Connection" + error)
})



const SECRET_KEY = "MYNAMEISKASHIFKAMILSHEIKHIAMASOFTWAREDEVELOPER";
const authenticate = async (req,res,next) =>{
    try {
        console.log(req.cookies.jwt_token)
        const token = req.cookies.jwt_token;
        // console.log(token)
        const verifyToken = jwt.verify(token,SECRET_KEY)
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if(!rootUser || !token){
            console.log("user not found")
            throw new Error("user not found")
        }else{
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            next();
        }

        
    } catch (error) {
        res.status(400).json({message:"Unauthorized : No token provided"})
        console.log(error)
    }
}





app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')));
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))

})







app.post("/register", async (req,res)=>{

    const {name,email,number,password,cpassword} = req.body;

    if(!name||!email||!number||!password||!cpassword){
        res.status(401).json({error:"Plz fill all the details"});    
    }

    try {
        const userExist = await User.findOne({email});
        if(userExist){
            res.status(402).json({error:"Email already exist"});    
        }else if(password != cpassword){
            res.status(400).json({error:"Passwords are not matching"});    
        }else{
            const user = new User({name,email,number,password,cpassword});
            await user.save();
            res.status(200).json({message:"User registered successfully"});    

        }

    } catch (error) {
        console.log(error)
    }
})




app.post("/login", async (req,res)=>{

    const {email,password} = req.body;

    try {
        let token;
        const userExist = await User.findOne({email});
        if(userExist){
            if(password === userExist.password){
                token = await userExist.generateToken();
                // console.log("Login Token : " + token);
                res.cookie("jwt_token",token,{
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly:true
                })
                res.status(200).json({message:"Login Successfully"})
            }else{
                res.status(400).json({error:"Password is not Matching"});    
            }
        }else{    
            res.status(400).json({error:"Email does not exist"});    
        }

    } catch (error) {
        console.log(error)
    }
})

app.get("/logout",(req,res)=>{
    res.clearCookie("jwt_token",{path:"/"})
    res.status(200).json({message:"Logout Succsessfully"})
})


app.get("/portfoliomain",authenticate,(req,res)=>{
    res.send(req.rootUser);
});


app.post("/portfoliodetails", authenticate,async (req,res)=>{
    const {
        board10,passingyear10,score10,
        board12,passingyear12,score12,
        degree01,degree01passingyear,degree01score,
        degree02,degree02passingyear,degree02score,
        degree03,degree03passingyear,degree03score,
        skills,experience,projects
    } = req.body;


    
    try {
        const userData = await User.findOne({_id:req.userID});
        
        await userData.addEduDetails(
            board10,passingyear10,score10,
            board12,passingyear12,score12,
            degree01,degree01passingyear,degree01score,
            degree02,degree02passingyear,degree02score,
            degree03,degree03passingyear,degree03score,
            skills,experience,projects);

            await userData.save();
            res.status(200).json({message:"User details saved successfully"})


    } catch (error) {
        console.log(error)
    }
})




app.post("/portfolioeditdetails", authenticate,async (req,res)=>{
    const {
        board10,passingyear10,score10,
        board12,passingyear12,score12,
        degree01,degree01passingyear,degree01score,
        degree02,degree02passingyear,degree02score,
        degree03,degree03passingyear,degree03score,
        skills,experience,projects
    } = req.body;

    try {
        const userData = await User.findOne({_id:req.userID});
        
        await userData.addEduDetails(
            board10,passingyear10,score10,
            board12,passingyear12,score12,
            degree01,degree01passingyear,degree01score,
            degree02,degree02passingyear,degree02score,
            degree03,degree03passingyear,degree03score,
            skills,experience,projects);

            await userData.save();
            res.status(200).json({message:"User details saved successfully"})

    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port no. ${PORT}`);
})
