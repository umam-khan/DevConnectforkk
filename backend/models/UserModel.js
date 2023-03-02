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
    skills:[{
        type:String
    }],
    github:{
        type:String
    },
    linkedIn:{
        type:String
    },
    resume:{
        type:String
    },
    phone:{
        type:String
    },
    // applications:[
    //     {
    //         type:mongoose.Types.ObjectId
    //     }
    // ],
    // rejected:[{
    //     type:mongoose.Types.ObjectId
    // }],
    // accepted:[{
    //     type:mongoose.Types.ObjectId
    // }]
})

module.exports = mongoose.model('user',UserSchema)