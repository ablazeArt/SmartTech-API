const commandData = require("../../models/usernameData/usernameData");

exports.createUsername = (req, res) => {
    const { username, commandId } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !username:
        return res.status(400).json({ error: "Please provide username." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    //Saveข้อมูล
    commandData.create({ username, commandId }, (err, command) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(command);
    });
  };

  // ดึงคำสั่งทั้งหมด
exports.getAllUsername = (req, res) => {
    commandData.find({}).exec((err, commands) => {
      res.json(commands);
    });
  };

  //ดึงเพียงคำสั่งเดียว
exports.singleUsername = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

    //แก้ไขคำสั่ง
exports.modifyUsername = (req, res) => {
    const { commandId } = req.params;
    // ส่งข้อมูล => title , content, author
    const { username } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !username:
        return res.status(400).json({ error: "Please provide username." });
        break;
    }
    commandData.findOneAndUpdate({ commandId }, { username }, { new: true }).exec((err, command) => {
      if (err) console.log(err);
      res.json(command);
    });
  };
