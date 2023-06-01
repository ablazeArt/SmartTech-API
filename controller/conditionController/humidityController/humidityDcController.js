//ติดต่อกับฐานข้อมูล /ดำเนินการข้อมูล
const commandData = require("../../../models/conditionData/humidityDataModels/humidityDcData");

exports.createHumidityDc = (req, res) => {
  const { actuatorName, humidityValue, speed, direction, commandId, condition } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !humidityValue:
      return res.status(400).json({ error: "Please provide the actuator initial value." });
      break;
    case !speed:
      return res.status(400).json({ error: "Please provide the actuator status." });
      break;
    case !direction:
      return res.status(400).json({ error: "Please provide the actuator direction." });
      break;
    case !condition:
      return res.status(400).json({ error: "Please provide the actuator condition." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ actuatorName, humidityValue, speed, direction, commandId, condition }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllCommandsHumidityDc = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singleCommandHumidityDc = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};
//ลบคำสั่ง
exports.removeHumidityDc = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};

//แก้ไขคำสั่ง
exports.modifyHumidityDc = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { actuatorName, humidityValue, speed, direction, condition } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !humidityValue:
      return res.status(400).json({ error: "Please provide the actuator initial value." });
      break;
    case !speed:
      return res.status(400).json({ error: "Please provide the actuator status." });
      break;
    case !direction:
      return res.status(400).json({ error: "Please provide the actuator direction." });
      break;
    case !condition:
      return res.status(400).json({ error: "Please provide the actuator condition." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { actuatorName, humidityValue, speed, direction, condition }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};
