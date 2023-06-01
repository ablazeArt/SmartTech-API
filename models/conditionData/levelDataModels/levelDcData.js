const mongoose = require("mongoose")

const levelDcSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    levelValue:{
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

module.exports = mongoose.model("levelDc",levelDcSchema)