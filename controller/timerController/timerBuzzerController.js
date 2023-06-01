const commandData = require("../../models/timerData/timerBuzzerData");

exports.createTimerBuzzer = (req, res) => {
  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, status, commandId } = req.body;

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
    case !status:
      return res.status(400).json({ error: "Please provide the actuator status." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, status, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsTimerBuzzer = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singleCommandTimerBuzzer = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

//ลบคำสั่ง
exports.removeTimerBuzzer = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

//แก้ไขคำสั่ง
exports.modifyTimerBuzzer = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, status } = req.body;

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
    case !status:
      return res.status(400).json({ error: "Please provide the actuator status." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { actuatorName, dayStart, hourStart, minuteStart, dayEnd, hourEnd, minuteEnd, status }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};
