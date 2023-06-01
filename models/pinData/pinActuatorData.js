const mongoose = require("mongoose");

const pinActuatorSchema = mongoose.Schema({
  led: {
    type: String,
    required: true,
  },
  buzzer: {
    type: String,
    required: true,
  },
  solenoid: {
    type: String,
    required: true,
  },
  servo: {
    type: String,
    required: true,
  },
  dc1: {
    type: String,
    required: true,
  },
  dc2: {
    type: String,
    required: true,
  },
  dc3: {
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
pinActuatorSchema.pre("save", function (next) {
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

module.exports = mongoose.model("pinActuator", pinActuatorSchema);
