const mongoose = require("mongoose");

const timerServoSchema = mongoose.Schema(
  {
    actuatorName: {
      type: String,
      require: true,
    },
    dayStart: {
      type: String,
      require: true
    },
    hourStart: {
      type: Number,
      require: true
    },
    minuteStart: {
      type: Number,
      require: true
    },
    dayEnd: {
      type: String,
      require: true
    },
    hourEnd: {
      type: Number,
      require: true
    },
    minuteEnd: {
      type: Number,
      require: true
    },
    degree: {
      type: Number,
      require: true,
    },
    commandId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("timerServo", timerServoSchema);
