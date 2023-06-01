const commandData = require("../../models/pinData/pinActuatorData");

exports.createPinActuator = (req, res) => {
  const { led, buzzer, solenoid, servo, dc1, dc2, dc3, commandId } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !led:
      return res.status(400).json({ error: "Please provide led pin." });
      break;
    case !buzzer:
      return res.status(400).json({ error: "Please provide buzzer pin." });
      break;
    case !solenoid:
      return res.status(400).json({ error: "Please provide solenoid pin." });
      break;
    case !servo:
      return res.status(400).json({ error: "Please provide servo pin." });
      break;
    case !dc1:
      return res.status(400).json({ error: "Please provide dc1 pin." });
      break;
    case !dc2:
      return res.status(400).json({ error: "Please provide dc2 pin." });
      break;
    case !dc3:
      return res.status(400).json({ error: "Please provide dc3 pin." });
      break;
  }
  //Saveข้อมูล
  commandData.create({ led, buzzer, solenoid, servo, dc1, dc2, dc3, commandId }, (err, command) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.json(command);
  });
};

// ดึงคำสั่งทั้งหมด
exports.getAllPinActuator = (req, res) => {
  commandData.find({}).exec((err, commands) => {
    res.json(commands);
  });
};

//ดึงเพียงคำสั่งเดียว
exports.singlePinActuator = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

//แก้ไขคำสั่ง
exports.modifyPinActuator = (req, res) => {
  const { commandId } = req.params;
  // ส่งข้อมูล => title , content, author
  const { led, buzzer, solenoid, servo, dc1, dc2, dc3 } = req.body;

  //validate(ตรวจสอบข้อมูล)
  switch (true) {
    case !led:
      return res.status(400).json({ error: "Please provide led pin." });
      break;
    case !buzzer:
      return res.status(400).json({ error: "Please provide buzzer pin." });
      break;
    case !solenoid:
      return res.status(400).json({ error: "Please provide solenoid pin." });
      break;
    case !servo:
      return res.status(400).json({ error: "Please provide servo pin." });
      break;
    case !dc1:
      return res.status(400).json({ error: "Please provide dc1 pin." });
      break;
    case !dc2:
      return res.status(400).json({ error: "Please provide dc2 pin." });
      break;
    case !dc3:
      return res.status(400).json({ error: "Please provide dc3 pin." });
      break;
  }
  commandData.findOneAndUpdate({ commandId }, { led, buzzer, solenoid, servo, dc1, dc2, dc3 }, { new: true }).exec((err, command) => {
    if (err) console.log(err);
    res.json(command);
  });
};

//ลบคำสั่ง
exports.removePinActuator = (req, res) => {
  const { commandId } = req.params;
  commandData.findOneAndRemove({ commandId }).exec((err, command) => {
    if (err) console.log(err);
    res.json({
      message: "delete completed",
    });
  });
};