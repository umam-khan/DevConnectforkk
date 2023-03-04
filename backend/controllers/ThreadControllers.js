const User = require('../models/UserModel')
const Thread = require('../models/ThreadModel');
const { default: mongoose } = require('mongoose');

const createThread = async(req,res)=>{
    try{
        const {title,field,problem,description,positions,responsibilities,mode,location,prize,additionalDetail,user_id} = req.body;
        console.log(positions)
        const existingUser = await User.findById({_id:user_id});
        if (!existingUser){
            res.status(404).json({error:"User not found with this ID"});
            return
        }
        const thread = new Thread({
            title:title,
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


    } catch (err){
        console.log(err);
        res.status(500).json({error:"An Internal Error Occurred"})
    }

}

module.exports = {createThread};