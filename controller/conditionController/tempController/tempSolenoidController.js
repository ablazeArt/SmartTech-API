const commandData = require("../../../models/conditionData/tempDataModels/tempSolenoidData");

exports.createTempSolenoid = (req, res) => {
    const { actuatorName, tempValue, status, commandId, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !tempValue:
        return res.status(400).json({ error: "Please provide the initial value." });
        break;
      case !status:
        return res.status(400).json({ error: "Please provide the actuator status." });
        break;
      case !condition:
        return res.status(400).json({ error: "Please provide the actuator condtion." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    //Saveข้อมูล
    commandData.create({ actuatorName, tempValue, status, commandId, condition }, (err, command) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(command);
    });
  };

  // ดึงคำสั่งทั้งหมด
exports.getAllCommandsTempSolenoid = (req, res) => {
    commandData.find({}).exec((err, commands) => {
      res.json(commands);
    });
  };

  //ดึงเพียงคำสั่งเดียว
exports.singleCommandTempSolenoid = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

  //ลบคำสั่ง
exports.removeTempSolenoid = (req, res) => {
    const { commandId } = req.params;
    commandData.findOneAndRemove({ commandId }).exec((err, command) => {
      if (err) console.log(err);
      res.json({
        message: "delete completed",
      });
    });
  };

  //แก้ไขคำสั่ง
exports.modifyTempSolenoid = (req, res) => {
    const { commandId } = req.params;
    // ส่งข้อมูล => title , content, author
    const { actuatorName, tempValue, status, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !tempValue:
        return res.status(400).json({ error: "Please provide the initial value." });
        break;
      case !status:
        return res.status(400).json({ error: "Please provide the actuator status." });
        break;
      case !condition:
        return res.status(400).json({ error: "Please provide the actuator condtion." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    commandData.findOneAndUpdate({ commandId }, { actuatorName, tempValue, status, condition }, { new: true }).exec((err, command) => {
      if (err) console.log(err);
      res.json(command);
    });
  };