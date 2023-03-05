const User = require('../models/UserModel');
const Thread = require('../models/ThreadModel');
const Application = require('../models/ApplicationModel');
const { default: mongoose, mongo } = require('mongoose');
const { populate } = require('../models/ApplicationModel');

const Apply = async(req,res)=>{
    try{
        const {position,why_work,best_project,best_project_link,experience,thread} = req.body;
        const applicant = req.user.user_id;
        console.log(applicant)
        const existingThread = await Thread.findById({_id:thread});
        if (!existingThread){
            res.status(404).json({error:"Thread not found"})
        }
        const existingUser = await User.findById({_id:applicant});
        if (!existingUser){
            res.status(404).json({error:"User not found"})
        }

        const application = new Application({
            position:position,
            why_work:why_work,
            best_project:best_project,
            best_project_link:best_project_link,
            experience:experience,
            thread:thread,
            applicant:applicant,
            status:"pending"
        })

        const session = await mongoose.startSession();
        session.startTransaction();
        await application.save({session});
        existingThread.application_ids.push(application);
        await existingThread.save({session});
        existingUser.application_ids.push(application);
        await existingUser.save({session})
        await session.commitTransaction();
        res.status(200).json({message:"This Thread has been Applied for sucessfully!"})
    } catch(error){
        console.log(error);
        res.status(500).json({error:'Unknown Server Error'})
    }

}

const myApplications = async(req,res)=>{
    try{
        const {id} = req.params;
        const existingUser = await User.findById({_id:id}).populate('application_ids').select(["-password","-bio","-linkedIn","-phone","-resume"]);
        if (!existingUser){
            res.status(404).json({error:"User not found with this id"});
            return
        }
        res.status(200).json({name:existingUser.name,applications:existingUser.application_ids})

    } catch (error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
}

const removeApplication = async(req,res)=>{
    try{
        const {id} = req.body;
        const existingApplication = await Application.findById({_id:id});
        if (!existingApplication){
            res.status(404).json({error:"Application not found"})
        }
        const deletedApplication = await Application.findByIdAndRemove({_id:id}).populate('thread').populate('applicant');
        const session = await mongoose.startSession();
        session.startTransaction()
        deletedApplication.thread.application_ids.pull(deletedApplication);
        await deletedApplication.thread.save({session})
        deletedApplication.applicant.application_ids.pull(deletedApplication);
        await deletedApplication.applicant.save({session})
        await session.commitTransaction();
        res.status(200).json({message:"This Application has been sucessfully deleted!"})

    } catch (error){
        console.log(error);
        res.status(500).json({error:"Sorry an Unkown Error Occurred"})
    }
}


module.exports = {Apply, myApplications,removeApplication}