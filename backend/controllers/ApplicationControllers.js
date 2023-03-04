const User = require('../models/UserModel');
const Thread = require('../models/ThreadModel');
const Application = require('../models/ApplicationModel');
const { default: mongoose } = require('mongoose');

const Apply = async(req,res)=>{
    try{
        const {position,why_work,best_project,best_project_link,experience,thread,applicants} = req.body;
        const existingThread = await Thread.findById({_id:thread});
        if (!existingThread){
            res.status(404).json({error:"Thread not found"})
        }
        const existingUser = await User.findById({_id:applicants});
        if (!existingUser){
            res.status(404).json({error:"User not found"})
        }

        console.log(existingThread);

        const application = new Application({
            position:position,
            why_work:why_work,
            best_project:best_project,
            best_project_link:best_project_link,
            experience:experience,
            thread:thread,
            applicants:applicants
        })

        const session = await mongoose.startSession();
        session.startTransaction();
        await application.save({session});
        existingThread.applicants.push(application);
        await existingThread.save({session});
        existingUser.applications.push(application);
        await existingUser.save({session})
        await session.commitTransaction();
        res.status(200).json({message:"This Thread has been Applied for sucessfully!"})
    } catch(error){
        console.log(error);
        res.status(500).json({error:'Unknown Server Error'})
    }

}

module.exports = {Apply}