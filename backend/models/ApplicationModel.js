const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    why_work:{
        type:String,
        required:true
    },
    best_project:{
        type:String,
        required:true
    },
    best_project_link:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    thread:{
        type:mongoose.Types.ObjectId,
        ref:"Thread",
        required:true
    },
    applicant:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Application',ApplicationSchema);