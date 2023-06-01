const mongoose = require("mongoose")

const irsensorLedSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    irsensorValue:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    commandId:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("irsensorLed",irsensorLedSchema)