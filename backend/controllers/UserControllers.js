const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// FOR BCRYPT (LATER TO PUT IN ENVIRONTMENT VARIABLES)
const saltRounds = 10;

const Signup = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        if (!name || !email || !password){
            res.status(400).json({error:'Send all required fields in body!'});
            return;
        }
        const existingUser = await  User.findOne({email});
        if (existingUser){
            res.status(403).json({error:'User Already Exists! Use Login'});
            return
        } else{
            const hashedPassword = await bcrypt.hash(password,saltRounds)
            const user = new User({
                name:name,
                email:email,
                password:hashedPassword
            })

            user.save();
            res.status(200).json({message:"User Created Sucessfully"})
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error:"An Error Occurred"})

    }
}
const UpdateProfile = async(req,res)=>{
    try{
        const {bio, skills, github , linkedIn, resume,phone,college,profile_picture,user_id} = req.body;
        if (req.user.user_id !== user_id){
            res.status(401).json({error:"You cannot Update someone else's profile"});
            return;
        }
        const existingUser = User.findOne({_id:user_id})
        if (!existingUser){
            res.status(404).json({error:'User not found'})
        }
        await existingUser.updateOne({_id:user_id},{bio:bio,skills:skills,github:github,linkedIn:linkedIn, resume:resume, phone:phone,college:college, profile_picture:profile_picture});
        res.status(200).json({message:'User Updated'})
    } catch (err){
        console.log(err);
        res.status(500).json({error:"An unkown error occurred"})
    }
}
const Login = async(req,res)=>{
    const {email,password} = req.body;
    if (!email || !password){
        res.json(400).json({error:"Please pass all required fields in body"});
        return
    }
    const existingUser = await User.findOne({email});
    if (!existingUser){
        res.status(404).json({error:"User not found! Signup first"});
        return;
    }
    const user_id = existingUser._id;
    bcrypt.compare(password,existingUser.password).then((result)=>{
        if (result){
            const token = jwt.sign({user_id},'secret_key')
            res.status(200).json({message:"LOGIN SUCESS", token:token})
        } else {
            res.status(401).json({error:"Incorrect Password"})
        }
    })
}

const ViewProfile = async(req,res) =>{
    try{
        const {id} = req.params;
        const existingUser = await User.findById({_id:id}).select(['-password','-email','-phone']);
        if (!existingUser){
            res.status(404).json({error:"No user found"});
            return
        }
        res.status(200).json({user:existingUser})
    } catch(error){
        console.log(error);
        res.status(500).json({error:"An unkown error ocurred"})
    }
}

const ViewMyProfile = async(req,res)=>{
    const loggedInUser = req.user.user_id
    try{
        const {id} = req.params;
        if (loggedInUser!== id){
            res.status(401).json({error:"You cannot view somebody's personal profile"});
            return;
        }
        const existingUser = await User.findById({_id:id}).select(['-password']);
        if (!existingUser){
            res.status(404).json({error:"No user found"});
            return;
        }
        res.status(200).json({user:existingUser})
    } catch(error){
        console.log(error);
        res.status(500).json({error:"An Unknown Error Occurred"})
    }
}

const exploreUsers = async(req,res)=>{
    try{
        const users = await User.aggregate(
            [{$sample:{size:10}},{$project:{
                "password":0,
                "email":0,
                "threads":0,
                "application_ids":0,
                "college":0,
                "github":0,
                "linkedIn":0,
                "phone":0,
                "resume":0
            }}]
        )
        if (!users){
            res.status(404).json({error:"No Users found"});
            return;
        }
        res.status(200).json({users:users})
    } catch (error){
        console.log(error);
        res.status(500).json({error:"An Unkown Server Error Occurred"})
    }
}

module.exports = {Signup, Login, UpdateProfile,ViewProfile,ViewMyProfile,exploreUsers}