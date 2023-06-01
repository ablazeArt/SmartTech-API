const mongoose = require("mongoose");

const profileImgSchema = mongoose.Schema(
  {
    profileImg: {
      type: String,
      required: true,
    },
    commandId: {
        type: String,
        required: true,
        unique: true,
      },
  }
);

// Pre-save hook to check if there is an existing document
// manualBuzzerSchema.pre("save", function (next) {
//   const model = this.constructor;
//   model.countDocuments({}, (err, count) => {
//     if (err) {
//       return next(err);
//     }
//     if (count > 0) {
//       const error = new Error("Only one data entry is allowed.");
//       return next(error);
//     }
//     next();
//   });
// });

module.exports = mongoose.model("profileImg", profileImgSchema);