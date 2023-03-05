const mongoose = require('mongoose');

const ThreadSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    positions:[{
        type:String,
        required:true
    }],
    responsibilities:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    prize:{
        type:String,
        required:true,
    },
    additionalDetail:{
        type:String
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    application_ids:[{
        type:mongoose.Types.ObjectId,
        ref:"Application",
        required:true
    }],

})

module.exports = mongoose.model('Thread',ThreadSchema)