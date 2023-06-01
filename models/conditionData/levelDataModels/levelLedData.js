const mongoose = require("mongoose")

const levelLedSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    levelValue:{
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

module.exports = mongoose.model("levelLed",levelLedSchema)