const mongoose = require("mongoose");

const manualDcSchema = mongoose.Schema(
  {
    actuatorName: {
      type: String,
      require: true,
    },
    speed: {
      type: Number,
      require: true,
    },
    direction: {
      type: String,
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
manualDcSchema.pre("save", function (next) {
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

module.exports = mongoose.model("manualDc", manualDcSchema);
