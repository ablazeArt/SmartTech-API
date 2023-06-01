const mongoose = require("mongoose")

const humidityDcSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    humidityValue:{
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

module.exports = mongoose.model("humidityDc",humidityDcSchema)