const mongoose = require("mongoose")

const tempServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    tempValue:{
        type:Number,
        require:true
    },
    degree:{
        type:Number,
        require:true
    },
    condition:{
      type:String,
      require:true
    },
    commandId:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("tempServo",tempServoSchema)