const mongoose = require("mongoose")

const tempLedSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    tempValue:{
        type:Number,
        require:true
    },
    status:{
        type:String,
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

module.exports = mongoose.model("tempLed",tempLedSchema)