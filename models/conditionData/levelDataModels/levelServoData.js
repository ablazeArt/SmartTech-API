const mongoose = require("mongoose")

const levelServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    levelValue:{
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

module.exports = mongoose.model("levelServo",levelServoSchema)