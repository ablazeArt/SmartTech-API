const commandData = require("../../models/profileImgData/profileImgData");

exports.createProfileImg = (req, res) => {
    const { profileImg, commandId } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !profileImg:
        return res.status(400).json({ error: "Please provide profileImg." });
        break;
      case !commandId:
        return res.status(400).json({ error: "Please provide the actuator Id." });
        break;
    }
    //Saveข้อมูล
    commandData.create({ profileImg, commandId }, (err, command) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json(command);
    });
  };

  // ดึงคำสั่งทั้งหมด
exports.getAllProfileImg = (req, res) => {
    commandData.find({}).exec((err, commands) => {
      res.json(commands);
    });
  };

  //ดึงเพียงคำสั่งเดียว
exports.singleProfileImg = (req, res) => {
  const { commandId } = req.params;
  commandData.findOne({ commandId }).exec((err, command) => {
    res.json(command);
  });
};

    //แก้ไขคำสั่ง
exports.modifyProfileImg = (req, res) => {
    const { commandId } = req.params;
    // ส่งข้อมูล => title , content, author
    const { profileImg } = req.body;
  
    //validate(ตรวจสอบข้อมูล)
    switch (true) {
      case !profileImg:
        return res.status(400).json({ error: "Please provide profileImg." });
        break;
    }
    commandData.findOneAndUpdate({ commandId }, { profileImg }, { new: true }).exec((err, command) => {
      if (err) console.log(err);
      res.json(command);
    });
  };
