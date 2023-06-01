//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../../../models/conditionData/tempDataModels/tempServoData");

exports.createTempServo = (req, res) => {
  const { actuatorName, tempValue, degree, commandId, condition } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !tempValue:
      return res.status(400).json({ error: "Please provide the actuator initial value." });
      break;
    case !degree:
      return res.status(400).json({ error: "Please provide the actuator status." });
      break;
    case !condition:
      return res.status(400).json({ error: "Please provide the actuator condition." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, tempValue, degree, commandId, condition }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsTempServo = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singleCommandTempServo = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};
//ลบคำสั่ง
exports.removeTempServo = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

//แก้ไขคำสั่ง
exports.modifyTempServo = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { actuatorName, tempValue, degree, condition } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !tempValue:
      return res.status(400).json({ error: "Please provide the actuator initial value." });
      break;
    case !degree:
      return res.status(400).json({ error: "Please provide the actuator degree." });
      break;
    case !condition:
      return res.status(400).json({ error: "Please provide the actuator condition." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { actuatorName, tempValue, degree, condition }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};
