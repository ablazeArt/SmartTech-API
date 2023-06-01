const mongoose = require("mongoose");

const timerBuzzerSchema = mongoose.Schema(
  {
    actuatorName: {
      type: String,
      required: true,
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
    status: {
      type: String,
      required: true,
    },
    commandId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("timerBuzzer", timerBuzzerSchema);
