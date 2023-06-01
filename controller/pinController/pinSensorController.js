const commandData = require("../../models/pinData/pinSensorData");

exports.createPinSensor = (req, res) => {
  const { ldr, level1, level2, level3, level4, ir, commandId } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !ldr:
      return res.status(400).json({ error: "Please provide ldr pin." });
      break;
    case !level1:
      return res.status(400).json({ error: "Please provide level1 pin." });
      break;
    case !level2:
      return res.status(400).json({ error: "Please provide level2 pin." });
      break;
    case !level3:
      return res.status(400).json({ error: "Please provide level3 pin." });
      break;
    case !level4:
      return res.status(400).json({ error: "Please provide level4 pin." });
      break;
    case !ir:
      return res.status(400).json({ error: "Please provide ir pin." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ ldr, level1, level2, level3, level4, ir, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllPinSensor = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singlePinSensor = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

//แก้ไขคำสั่ง
exports.modifyPinSensor = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { ldr, level1, level2, level3, level4, ir } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !ldr:
      return res.status(400).json({ error: "Please provide ldr pin." });
      break;
    case !level1:
      return res.status(400).json({ error: "Please provide level1 pin." });
      break;
    case !level2:
      return res.status(400).json({ error: "Please provide level2 pin." });
      break;
    case !level3:
      return res.status(400).json({ error: "Please provide level3 pin." });
      break;
    case !level4:
      return res.status(400).json({ error: "Please provide level4 pin." });
      break;
    case !ir:
      return res.status(400).json({ error: "Please provide ir pin." });
      break;
    case !commandId:
      return res.status(400).json({ error: "Please provide the actuator Id." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { ldr, level1, level2, level3, level4, ir }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};

//ลบคำสั่ง
exports.removePinSensor = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};
