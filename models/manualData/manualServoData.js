const mongoose = require("mongoose");

const manualServoSchema = mongoose.Schema(
  {
    actuatorName: {
      type: String,
      require: true,
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

// Pre-save hook to check if there is an existing document
manualServoSchema.pre("save", function (next) {
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

module.exports = mongoose.model("manualServo", manualServoSchema);
