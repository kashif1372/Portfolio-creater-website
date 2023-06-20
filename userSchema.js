const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    eduDetails:
        {
            board10:{type:String},
            passingyear10:{type:String},
            score10:{type:String},
            
            board12:{type:String},
            passingyear12:{type:String},
            score12:{type:String},
            
            degree01:{type:String},
            degree01passingyear:{type:String},
            degree01score:{type:String},
            
            degree02:{type:String},
            degree02passingyear:{type:String},
            degree02score:{type:String},
            
            degree03:{type:String},
            degree03passingyear:{type:String},
            degree03score:{type:String},

            skills:{type:String},
            experience:{type:String},
            projects:{type:String}
        }
    
})

const SECRET_KEY = "MYNAMEISKASHIFKAMILSHEIKHIAMASOFTWAREDEVELOPER";

userSchema.methods.generateToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save();
        // console.log("Generated Token :" + token)
        return token;

    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.addEduDetails = async function (
    board10,passingyear10,score10,
    board12,passingyear12,score12,
    degree01,degree01passingyear,degree01score,
    degree02,degree02passingyear,degree02score,
    degree03,degree03passingyear,degree03score,
    skills,experience,projects){
    try {
        
            // this.eduDetails.board10 = board10
            // this.eduDetails.passingyear10 = passingyear10
            // this.eduDetails.score10 = score10
            
            // this.eduDetails.board12 = board12
            // this.eduDetails.passingyear12 = passingyear12
            // this.eduDetails.score12 = score12
            
            // this.eduDetails.degree01 = degree01
            // this.eduDetails.degree01passingyear = degree01passingyear
            // this.eduDetails.degree01score = degree01score
            
            // this.eduDetails.degree02 = degree02
            // this.eduDetails.degree02passingyear = degree02passingyear
            // this.eduDetails.degree02score = degree02score
            
            // this.eduDetails.degree03 = degree03
            // this.eduDetails.degree03passingyear = degree03passingyear
            // this.eduDetails.degree03score = degree03score
            
            // this.eduDetails.skills = skills
            // this.eduDetails.experience = experience
            // this.eduDetails.projects = projects


            if(board10) {this.eduDetails.board10 = board10}
            if(passingyear10) {this.eduDetails.passingyear10 = passingyear10}
            if(score10) {this.eduDetails.score10 = score10}
            
            if(board12) {this.eduDetails.board12 = board12}
            if(passingyear12) {this.eduDetails.passingyear12 = passingyear12}
            if(score12) {this.eduDetails.score12 = score12}
            
            if(degree01) {this.eduDetails.degree01 = degree01}
            if(degree01passingyear) {this.eduDetails.degree01passingyear = degree01passingyear}
            if(degree01score) {this.eduDetails.degree01score = degree01score}
            
            if(degree02) {this.eduDetails.degree02 = degree02}
            if(degree02passingyear) {this.eduDetails.degree02passingyear = degree02passingyear}
            if(degree02score) {this.eduDetails.degree02score = degree02score}
            
            if(degree03) {this.eduDetails.degree03 = degree03}
            if(degree03passingyear) {this.eduDetails.degree03passingyear = degree03passingyear}
            if(degree03score) {this.eduDetails.degree03score = degree03score}
            
            if(skills) {this.eduDetails.skills = skills}
            if(experience) {this.eduDetails.experience = experience}
            if(projects) {this.eduDetails.projects = projects}

        await this.save();
        return this.eduDetails;

    } catch (error) {
        console.log(error)
    }
}



const User = mongoose.model('USERDATA', userSchema);
module.exports = User;