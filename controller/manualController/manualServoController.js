//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../../models/manualData/manualServoData");

exports.createManualServo = (req, res) => {
  const { actuatorName, degree, commandId } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !degree:
      return res.status(400).json({ error: "Please provide the actuator degree." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, degree, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsManualServo = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ลบคำสั่ง
exports.removeManualServo = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

