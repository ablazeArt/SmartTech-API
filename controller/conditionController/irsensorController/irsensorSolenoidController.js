const commandData = require("../../../models/conditionData/irsensorDataModels/irsensorSolenoidData");

exports.createIrsensorSolenoid = (req, res) => {
    const { actuatorName, irsensorValue, status, commandId, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !irsensorValue:
        return res.status(400).json({ error: "Please provide the initial value." });
        break;
      case !status:
        return res.status(400).json({ error: "Please provide the actuator status." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    //Saveข้อมูล
    commandData.create({ actuatorName, irsensorValue, status, commandId, condition }, (err, command) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(command);
    });
  };

  // ดึงคำสั่งทั้งหมด
exports.getAllCommandsIrsensorSolenoid = (req, res) => {
    commandData.find({}).exec((err, commands) => {
      res.json(commands);
    });
  };

  //ดึงเพียงคำสั่งเดียว
exports.singleCommandIrsensorSolenoid = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

  //ลบคำสั่ง
exports.removeIrsensorSolenoid = (req, res) => {
    const { commandId } = req.params;
    commandData.findOneAndRemove({ commandId }).exec((err, command) => {
      if (err) console.log(err);
      res.json({
        message: "delete completed",
      });
    });
  };

  //แก้ไขคำสั่ง
exports.modifyIrsensorSolenoid = (req, res) => {
    const { commandId } = req.params;
    // ส่งข้อมูล => title , content, author
    const { actuatorName, irsensorValue, status, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !irsensorValue:
        return res.status(400).json({ error: "Please provide the initial value." });
        break;
      case !status:
        return res.status(400).json({ error: "Please provide the actuator status." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    commandData.findOneAndUpdate({ commandId }, { actuatorName, irsensorValue, status, condition }, { new: true }).exec((err, command) => {
      if (err) console.log(err);
      res.json(command);
    });
  };