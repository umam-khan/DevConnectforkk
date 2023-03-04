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
        // const {skills,github,linkedIn, resume, phone, user_id} = req.body;
        const {bio, skills, github , linkedIn, resume,phone,user_id} = req.body;
        const existingUser = User.findOne({_id:user_id})
        if (!existingUser){
            res.status(404).json({error:'User not found'})
        }
        await existingUser.updateOne({_id:user_id},{bio:bio,skills:skills,github:github,linkedIn:linkedIn, resume:resume, phone:phone});
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
            console.log(token)
            res.status(200).json({message:"LOGIN SUCESS", token:token})
        } else {
            res.status(401).json({message:"Incorrect Password"})
        }
    })
}

const ViewProfile = async(req,res) =>{
    try{
        const {id} = req.params;
        const existingUser = await User.findById({_id:id}).select(['-password']);
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


module.exports = {Signup, Login, UpdateProfile,ViewProfile}