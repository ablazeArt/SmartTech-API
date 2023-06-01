const commandData = require("../../../models/conditionData/lightDataModels/lightLedData");

exports.createLightLed = (req, res) => {
    const { actuatorName, lightValue, status, commandId, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !lightValue:
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
    commandData.create({ actuatorName, lightValue, status, commandId, condition }, (err, command) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(command);
    });
  };

  // ดึงคำสั่งทั้งหมด
exports.getAllCommandsLightLed = (req, res) => {
    commandData.find({}).exec((err, commands) => {
      res.json(commands);
    });
  };

  //ดึงเพียงคำสั่งเดียว
exports.singleCommandLightLed = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

  //ลบคำสั่ง
exports.removeLightLed = (req, res) => {
    const { commandId } = req.params;
    commandData.findOneAndRemove({ commandId }).exec((err, command) => {
      if (err) console.log(err);
      res.json({
        message: "delete completed",
      });
    });
  };

  //แก้ไขคำสั่ง
exports.modifyLightLed = (req, res) => {
    const { commandId } = req.params;
    // ส่งข้อมูล => title , content, author
    const { actuatorName, lightValue, status, condition } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !lightValue:
        return res.status(400).json({ error: "Please provide the initial value." });
        break;
      case !status:
        return res.status(400).json({ error: "Please provide the actuator status." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    commandData.findOneAndUpdate({ commandId }, { actuatorName, lightValue, status, condition }, { new: true }).exec((err, command) => {
      if (err) console.log(err);
      res.json(command);
    });
  };