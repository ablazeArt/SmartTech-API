const mongoose = require("mongoose");

const manualLedSchema = mongoose.Schema(
  {
    actuatorName: {
      type: String,
      required: true,
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

// Pre-save hook to check if there is an existing document
manualLedSchema.pre("save", function (next) {
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

module.exports = mongoose.model("manualLed", manualLedSchema);
