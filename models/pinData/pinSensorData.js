const mongoose = require("mongoose");

const pinSensorSchema = mongoose.Schema({
  ldr: {
    type: String,
    required: true,
  },
  level1: {
    type: String,
    required: true,
  },
  level2: {
    type: String,
    required: true,
  },
  level3: {
    type: String,
    required: true,
  },
  level4: {
    type: String,
    required: true,
  },
  ir: {
    type: String,
    required: true,
  },
  commandId: {
    type: String,
    required: true,
    unique: true,
  },
});

// Pre-save hook to check if there is an existing document
pinSensorSchema.pre("save", function (next) {
  const model = this.constructor;
  model.countDocuments({}, (err, count) => {
    if (err) {
      return next(err);
    }
    if (count > 0) {
      const error = new Error("Only one data entry is allowed.");
      return next(error);
    }
    next();
  });
});

module.exports = mongoose.model("pinSensor", pinSensorSchema);
