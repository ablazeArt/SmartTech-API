//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../../models/timerData/timerServoData");

exports.createTimerServo = (req, res) => {
  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree, commandId } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !dayStart:
      return res.status(400).json({ error: "Please provide the starting day." });
      break;
    case !hourStart:
      return res.status(400).json({ error: "Please provide the starting hour." });
      break;
    case !minuteStart:
      return res.status(400).json({ error: "Please provide the starting minute." });
      break;
    case !dayEnd:
      return res.status(400).json({ error: "Please provide the ending day." });
      break;
    case !hourEnd:
      return res.status(400).json({ error: "Please provide the ending hour." });
      break;
    case !minuteEnd:
      return res.status(400).json({ error: "Please provide the ending minute." });
      break;
    case !degree:
      return res.status(400).json({ error: "Please provide the actuator degree." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsTimerServo = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singleCommandTimerServo = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

//ลบคำสั่ง
exports.removeTimerServo = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

//แก้ไขคำสั่ง
exports.modifyTimerServo = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !dayStart:
      return res.status(400).json({ error: "Please provide the starting day." });
      break;
    case !hourStart:
      return res.status(400).json({ error: "Please provide the starting hour." });
      break;
    case !minuteStart:
      return res.status(400).json({ error: "Please provide the starting minute." });
      break;
    case !dayEnd:
      return res.status(400).json({ error: "Please provide the ending day." });
      break;
    case !hourEnd:
      return res.status(400).json({ error: "Please provide the ending hour." });
      break;
    case !minuteEnd:
      return res.status(400).json({ error: "Please provide the ending minute." });
      break;
    case !degree:
      return res.status(400).json({ error: "Please provide the actuator degree." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, degree }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};
