const mongoose = require('mongoose');

const ThreadSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    }
})