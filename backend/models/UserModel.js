const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    skills:[{
        type:String,
    }],
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    resume:{
        type:String,
    },
    phone:{
        type:String,
    },
    threads:[{
        type:mongoose.Types.ObjectId,
        ref:'Thread',
        required:true
    }],
    applications:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Application",
            required:true
        }
    ],
    // rejected:[{
    //     type:mongoose.Types.ObjectId
    // }],
    // accepted:[{
    //     type:mongoose.Types.ObjectId
    // }]
})

module.exports = mongoose.model('User',UserSchema)