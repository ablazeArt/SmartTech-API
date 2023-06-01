const mongoose = require("mongoose")

const lightDcSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    lightValue:{
        type:String,
        require:true
    },
    speed:{
        type:Number,
        require:true
    },
    direction:{
        type:String,
        require:true
    },
    commandId:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("lightDc",lightDcSchema)