const mongoose = require("mongoose")

const lightLedSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    lightValue:{
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

module.exports = mongoose.model("lightLed",lightLedSchema)