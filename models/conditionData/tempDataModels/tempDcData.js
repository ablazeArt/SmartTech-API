const mongoose = require("mongoose")

const tempDcSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    tempValue:{
        type:Number,
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

module.exports = mongoose.model("tempDc",tempDcSchema)