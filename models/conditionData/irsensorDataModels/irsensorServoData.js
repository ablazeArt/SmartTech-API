const mongoose = require("mongoose")

const irsensorServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    irsensorValue:{
        type:String,
        require:true
    },
    degree:{
        type:Number,
        require:true
    },
    commandId:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("irsensorServo",irsensorServoSchema)