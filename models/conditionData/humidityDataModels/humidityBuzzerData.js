const mongoose = require("mongoose")

const humidityBuzzerSchema=mongoose.Schema({
    actuatorName:{
        type:String,
        require:true
    },
    humidityValue:{
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

module.exports = mongoose.model("humidityBuzzer",humidityBuzzerSchema)