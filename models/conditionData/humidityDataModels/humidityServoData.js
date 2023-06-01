const mongoose = require("mongoose")

const humidityServoSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    humidityValue:{
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

module.exports = mongoose.model("humidityServo",humidityServoSchema)