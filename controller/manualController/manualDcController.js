//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../../models/manualData/manualDcData");

exports.createManualDc = (req, res) => {
  const { actuatorName, speed, direction, commandId } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !speed:
      return res.status(400).json({ error: "Please provide the actuator speed." });
      break;
    case !direction:
      return res.status(400).json({ error: "Please provide the actuator direction." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, speed, direction, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsManualDc = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ลบคำสั่ง
exports.removeManualDc = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

