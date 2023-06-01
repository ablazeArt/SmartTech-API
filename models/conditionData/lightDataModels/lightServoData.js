const mongoose = require("mongoose")

const lightServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    lightValue:{
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

module.exports = mongoose.model("lightServo",lightServoSchema)