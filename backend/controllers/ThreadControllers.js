const User = require('../models/UserModel')
const Thread = require('../models/ThreadModel');
const Application = require('../models/ApplicationModel')
const { default: mongoose } = require('mongoose');

const createThread = async(req,res)=>{
    try{
        const {title,status,field,problem,description,positions,responsibilities,mode,location,prize,additionalDetail,user_id} = req.body;
        console.log(positions)
        const existingUser = await User.findById({_id:user_id});
        if (!existingUser){
            res.status(404).json({error:"User not found with this ID"});
            return
        }
        const thread = new Thread({
            title:title,
            status:status,
            field:field,
            problem:problem,
            description:description,
            positions:positions,
            responsibilities:responsibilities,
            mode:mode,
            location:location,
            prize:prize,
            additionalDetail:additionalDetail,
            user_id:user_id
        })
        try{
            const session = await mongoose.startSession();
            session.startTransaction();
            await thread.save({session});
            existingUser.threads.push(thread);
            await existingUser.save({session});
            await session.commitTransaction();
            res.status(200).json({message:"Thread creation sucessfull"})
        } catch (error){
            console.log(error)
        }


    } catch (error){
        console.log(error);
        res.status(500).json({error:"An Internal Error Occurred"})
    }

}

const viewThreads = async(req,res)=>{
    try{
        const threads = await Thread.find({}).populate([{path:'user_id',select:['name','profile_picture']}]).select(['-problem','-description','-responsibilities','-prize','-additionalDetail','-location','-email']);
        res.status(200).json({threads:threads})
    } catch (error){
        console.log(error)
        res.status(500).json({error:"An internal Server occurred"});
    }
}

const viewThread = async(req,res)=>{
    try{
        const {id} = req.params;
        const existingThread = await Thread.findById({_id:id}).populate('application_ids','applicant')
        if (!existingThread){
            res.status(403).json({error:"Thread Not Found"});
            return
        }
        res.status(200).json({thread:existingThread});


    } catch (error){
        console.log(error);
        res.status(500).json({error:"An internal server occurred"})
    }
}

const viewMyThreads = async(req,res)=>{
    try{
        const {id} = req.params;
        if (req.user.user_id != id){
            res.status(401).json({error:"You cant view some accounnt's threads"})
        }
        const existingUser = await User.findById({_id:id}).populate([
            {path:'threads', select:['-status','-description','-problem','-positions','-responsibilities','-mode','-prize','-additionalDetail']}
        ])
        if (!existingUser){
            res.status(404).json({error:'user not found'})
        }
        res.status(200).json({threads:existingUser.threads});
    } catch (error){
        res.status(500).json({error:"An unkown server error occurred!"})
        return;
    }
}

const AcceptReject = async(req,res)=>{
    try{
        const {status,application_id} = req.body;
        if (status!=="accepted" &&  status!=="rejected"){
            res.status(409).json({error:"Please pass either 'accepted' or 'rejected' in the status field"})
            return
        }
        const existingApplication = await Application.updateOne({_id:application_id},{status:status});
        if (!existingApplication){
            res.status(404).json({error:"Application ID not found"})
            return;
        }
        res.status(200).json({message:"Application Status has been Updated"})
    } catch (error){
        console.log(error);
        res.status(500).json({error:"Some Unkown Error Occurred"})
    }
}

const closeThread = async(req,res)=>{
    try{
        const {id} = req.body;
        const isThreadExists = await Thread.updateOne({_id:id},{status:'closed'});
        if (!isThreadExists){
            res.status(404).json({error:"Thread not found"});
            return;
        }
        res.status(200).json({message:"This thread has been closed"})
    } catch (error){
        console.log(error);
        res.status(500).json({error:"An Unkown Error Occurred"})
    }
}


module.exports = {createThread, viewThreads,viewThread, AcceptReject, closeThread, viewMyThreads};