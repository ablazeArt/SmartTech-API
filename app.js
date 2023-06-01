const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { getValueSensors } = require("./controller/sensorController");
const { getStatusActuators } = require("./controller/actuatorController");

const { createUsername, getAllUsername, singleUsername, modifyUsername } = require("./controller/usernameController/usernameController");
const { createProfileImg, getAllProfileImg, singleProfileImg, modifyProfileImg } = require("./controller/profileImgController/profileImgController");

const { createPinSensor, getAllPinSensor, singlePinSensor, modifyPinSensor, removePinSensor } = require("./controller/pinController/pinSensorController");
const { createPinActuator, getAllPinActuator, singlePinActuator, modifyPinActuator,removePinActuator } = require("./controller/pinController/pinActuatorController");

const { createTempServo, getAllCommandsTempServo, singleCommandTempServo, removeTempServo, modifyTempServo } = require("./controller/conditionController/tempController/tempServoController");
const { createTempDc, getAllCommandsTempDc, singleCommandTempDc, removeTempDc, modifyTempDc } = require("./controller/conditionController/tempController/tempDcController");
const { createTempLed, getAllCommandsTempLed, singleCommandTempLed, removeTempLed, modifyTempLed } = require("./controller/conditionController/tempController/tempLedController");
const { createTempSolenoid, getAllCommandsTempSolenoid, singleCommandTempSolenoid, removeTempSolenoid, modifyTempSolenoid } = require("./controller/conditionController/tempController/tempSolenoidController");
const { createTempBuzzer, getAllCommandsTempBuzzer, singleCommandTempBuzzer, removeTempBuzzer, modifyTempBuzzer } = require("./controller/conditionController/tempController/tempBuzzerController");

const { createHumidityServo, getAllCommandsHumidityServo, singleCommandHumidityServo, removeHumidityServo, modifyHumidityServo } = require("./controller/conditionController/humidityController/humidityServoController");
const { createHumidityDc, getAllCommandsHumidityDc, singleCommandHumidityDc, removeHumidityDc, modifyHumidityDc } = require("./controller/conditionController/humidityController/humidityDcController");
const { createHumidityLed, getAllCommandsHumidityLed, singleCommandHumidityLed, removeHumidityLed, modifyHumidityLed } = require("./controller/conditionController/humidityController/humidityLedController");
const { createHumiditySolenoid, getAllCommandsHumiditySolenoid, singleCommandHumiditySolenoid, removeHumiditySolenoid, modifyHumiditySolenoid } = require("./controller/conditionController/humidityController/humiditySolenoidController");
const { createHumidityBuzzer, getAllCommandsHumidityBuzzer, singleCommandHumidityBuzzer, removeHumidityBuzzer, modifyHumidityBuzzer } = require("./controller/conditionController/humidityController/humidityBuzzerController");

const { createIrsensorServo, getAllCommandsIrsensorServo, singleCommandIrsensorServo, removeIrsensorServo, modifyIrsensorServo } = require("./controller/conditionController/irsensorController/irsensorServoController");
const { createIrsensorDc, getAllCommandsIrsensorDc, singleCommandIrsensorDc, removeIrsensorDc, modifyIrsensorDc } = require("./controller/conditionController/irsensorController/irsensorDcController");
const { createIrsensorLed, getAllCommandsIrsensorLed, singleCommandIrsensorLed, removeIrsensorLed, modifyIrsensorLed } = require("./controller/conditionController/irsensorController/irsensorLedController");
const { createIrsensorSolenoid, getAllCommandsIrsensorSolenoid, singleCommandIrsensorSolenoid, removeIrsensorSolenoid, modifyIrsensorSolenoid } = require("./controller/conditionController/irsensorController/irsensorSolenoidController");
const { createIrsensorBuzzer, getAllCommandsIrsensorBuzzer, singleCommandIrsensorBuzzer, removeIrsensorBuzzer, modifyIrsensorBuzzer } = require("./controller/conditionController/irsensorController/irsensorBuzzerController");

const { createLevelServo, getAllCommandsLevelServo, singleCommandLevelServo, removeLevelServo, modifyLevelServo } = require("./controller/conditionController/levelController/levelServoController");
const { createLevelDc, getAllCommandsLevelDc, singleCommandLevelDc, removeLevelDc, modifyLevelDc } = require("./controller/conditionController/levelController/levelDcController");
const { createLevelLed, getAllCommandsLevelLed, singleCommandLevelLed, removeLevelLed, modifyLevelLed } = require("./controller/conditionController/levelController/levelLedController");
const { createLevelSolenoid, getAllCommandsLevelSolenoid, singleCommandLevelSolenoid, removeLevelSolenoid, modifyLevelSolenoid } = require("./controller/conditionController/levelController/levelSolenoidController");
const { createLevelBuzzer, getAllCommandsLevelBuzzer, singleCommandLevelBuzzer, removeLevelBuzzer, modifyLevelBuzzer } = require("./controller/conditionController/levelController/levelBuzzerController");

const { createLightServo, getAllCommandsLightServo, singleCommandLightServo, removeLightServo, modifyLightServo } = require("./controller/conditionController/lightController/lightServoController");
const { createLightDc, getAllCommandsLightDc, singleCommandLightDc, removeLightDc, modifyLightDc } = require("./controller/conditionController/lightController/lightDcController");
const { createLightLed, getAllCommandsLightLed, singleCommandLightLed, removeLightLed, modifyLightLed } = require("./controller/conditionController/lightController/lightLedController");
const { createLightSolenoid, getAllCommandsLightSolenoid, singleCommandLightSolenoid, removeLightSolenoid, modifyLightSolenoid } = require("./controller/conditionController/lightController/lightSolenoidController");
const { createLightBuzzer, getAllCommandsLightBuzzer, singleCommandLightBuzzer, removeLightBuzzer, modifyLightBuzzer } = require("./controller/conditionController/lightController/lightBuzzerController");

const { createManualLed, getAllCommandsManualLed, singleCommandManualLed, removeManualLed } = require("./controller/manualController/manualLedController");
const { createManualSolenoid, getAllCommandsManualSolenoid, singleCommandManualSolenoid, removeManualSolenoid } = require("./controller/manualController/manualSolenoidController");
const { createManualBuzzer, getAllCommandsManualBuzzer, singleCommandManualBuzzer, removeManualBuzzer } = require("./controller/manualController/manualBuzzerController");
const { createManualDc, getAllCommandsManualDc, removeManualDc } = require("./controller/manualController/manualDcController");
const { createManualServo, getAllCommandsManualServo, removeManualServo } = require("./controller/manualController/manualServoController");

const { createTimerLed, getAllCommandsTimerLed, singleCommandTimerLed, removeTimerLed, modifyTimerLed } = require("./controller/timerController/timerLedController");
const { createTimerSolenoid, getAllCommandsTimerSolenoid, singleCommandTimerSolenoid, removeTimerSolenoid, modifyTimerSolenoid } = require("./controller/timerController/timerSolenoidController");
const { createTimerBuzzer, getAllCommandsTimerBuzzer, singleCommandTimerBuzzer, removeTimerBuzzer, modifyTimerBuzzer } = require("./controller/timerController/timerBuzzerController");
const { createTimerDc, getAllCommandsTimerDc, singleCommandTimerDc, removeTimerDc, modifyTimerDc } = require("./controller/timerController/timerDcController");
const { createTimerServo, getAllCommandsTimerServo, singleCommandTimerServo, removeTimerServo, modifyTimerServo } = require("./controller/timerController/timerServoController");

require("dotenv").config();

const app = express();
//สำคัญมาก ใช้ในการ post ข้อมูล
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//connect cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("connected database"))
  .catch((err) => console.log(err));

require("./models/profileImgData/profileImgData")
const profileImg=mongoose.model("profileImg")
// //user schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

//routes routes
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});

app.post("/Register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
});

//ดึงค่าจากเซนเซอร์มาแสดง
app.get("/valueSensors", getValueSensors);
//ดึงสถานะจากแอคชูเอเตอร์มาแสดง
app.get("/statusActuators", getStatusActuators);

//username
//สร้างคำสั่ง
app.post("/createUsername", createUsername);

//ดึงคำสั่งมาแสดง
app.get("/commandsUsername", getAllUsername);
app.get("/commandUsername/:commandId", singleUsername);

app.put("/commandUsername/:commandId", modifyUsername);

//profileImg
//สร้างคำสั่ง
app.post("/createProfileImg", createProfileImg);

//ดึงคำสั่งมาแสดง
app.get("/commandsProfileImg", getAllProfileImg);
app.get("/commandProfileImg/:commandId", singleProfileImg);

app.put("/commandProfileImg/:commandId", modifyProfileImg);

//pinSensor
//สร้างคำสั่ง
app.post("/createPinSensor", createPinSensor);

//ดึงคำสั่งมาแสดง
app.get("/commandsPinSensor", getAllPinSensor);
app.get("/commandPinSensor/:commandId", singlePinSensor);

app.put("/commandPinSensor/:commandId", modifyPinSensor);

app.delete("/commandPinSensor/:commandId", removePinSensor);

//pinActuator
//สร้างคำสั่ง
app.post("/createPinActuator", createPinActuator);

//ดึงคำสั่งมาแสดง
app.get("/commandsPinActuator", getAllPinActuator);
app.get("/commandPinActuator/:commandId", singlePinActuator);

app.put("/commandPinActuator/:commandId", modifyPinActuator);

app.delete("/commandPinActuator/:commandId", removePinActuator);

//manualLed
//สร้างคำสั่ง
app.post("/createManualLed", createManualLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsManualLed", getAllCommandsManualLed);
app.get("/commandManualLed/:commandId", singleCommandManualLed);

app.delete("/commandManualLed/:commandId", removeManualLed);

//manualSolenoid
//สร้างคำสั่ง
app.post("/createManualSolenoid", createManualSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsManualSolenoid", getAllCommandsManualSolenoid);
app.get("/commandManualSolenoid/:commandId", singleCommandManualSolenoid);

app.delete("/commandManualSolenoid/:commandId", removeManualSolenoid);

//manualBuzzer
//สร้างคำสั่ง
app.post("/createManualBuzzer", createManualBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsManualBuzzer", getAllCommandsManualBuzzer);
app.get("/commandManualBuzzer/:commandId", singleCommandManualBuzzer);

app.delete("/commandManualBuzzer/:commandId", removeManualBuzzer);

//manualDc
//สร้างคำสั่ง
app.post("/createManualDc", createManualDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsManualDc", getAllCommandsManualDc);

app.delete("/commandManualDc/:commandId", removeManualDc);

//manualServo
//สร้างคำสั่ง
app.post("/createManualServo", createManualServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsManualServo", getAllCommandsManualServo);

app.delete("/commandManualServo/:commandId", removeManualServo);

//TimerServo
//สร้างคำสั่ง
app.post("/createTimerServo", createTimerServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsTimerServo", getAllCommandsTimerServo);
app.get("/commandTimerServo/:commandId", singleCommandTimerServo);

app.delete("/commandTimerServo/:commandId", removeTimerServo);
app.put("/commandTimerServo/:commandId", modifyTimerServo);

//TimerDc
//สร้างคำสั่ง
app.post("/createTimerDc", createTimerDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsTimerDc", getAllCommandsTimerDc);
app.get("/commandTimerDc/:commandId", singleCommandTimerDc);

app.delete("/commandTimerDc/:commandId", removeTimerDc);
app.put("/commandTimerDc/:commandId", modifyTimerDc);

//TimerLed
//สร้างคำสั่ง
app.post("/createTimerLed", createTimerLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsTimerLed", getAllCommandsTimerLed);
app.get("/commandTimerLed/:commandId", singleCommandTimerLed);

app.delete("/commandTimerLed/:commandId", removeTimerLed);
app.put("/commandTimerLed/:commandId", modifyTimerLed);

//TimerSolenoid
//สร้างคำสั่ง
app.post("/createTimerSolenoid", createTimerSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsTimerSolenoid", getAllCommandsTimerSolenoid);
app.get("/commandTimerSolenoid/:commandId", singleCommandTimerSolenoid);

app.delete("/commandTimerSolenoid/:commandId", removeTimerSolenoid);
app.put("/commandTimerSolenoid/:commandId", modifyTimerSolenoid);

//TimerBuzzer
//สร้างคำสั่ง
app.post("/createTimerBuzzer", createTimerBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsTimerBuzzer", getAllCommandsTimerBuzzer);
app.get("/commandTimerBuzzer/:commandId", singleCommandTimerBuzzer);

app.delete("/commandTimerBuzzer/:commandId", removeTimerBuzzer);
app.put("/commandTimerBuzzer/:commandId", modifyTimerBuzzer);

//TempServo
//สร้างคำสั่ง
app.post("/createTempServo", createTempServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsTempServo", getAllCommandsTempServo);
app.get("/commandTempServo/:commandId", singleCommandTempServo);

app.delete("/commandTempServo/:commandId", removeTempServo);
app.put("/commandTempServo/:commandId", modifyTempServo);

//TempDc
//สร้างคำสั่ง
app.post("/createTempDc", createTempDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsTempDc", getAllCommandsTempDc);
app.get("/commandTempDc/:commandId", singleCommandTempDc);

app.delete("/commandTempDc/:commandId", removeTempDc);
app.put("/commandTempDc/:commandId", modifyTempDc);

//TempLed
//สร้างคำสั่ง
app.post("/createTempLed", createTempLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsTempLed", getAllCommandsTempLed);
app.get("/commandTempLed/:commandId", singleCommandTempLed);

app.delete("/commandTempLed/:commandId", removeTempLed);
app.put("/commandTempLed/:commandId", modifyTempLed);

//TempSolenoid
//สร้างคำสั่ง
app.post("/createTempSolenoid", createTempSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsTempSolenoid", getAllCommandsTempSolenoid);
app.get("/commandTempSolenoid/:commandId", singleCommandTempSolenoid);

app.delete("/commandTempSolenoid/:commandId", removeTempSolenoid);
app.put("/commandTempSolenoid/:commandId", modifyTempSolenoid);

//TempBuzzer
//สร้างคำสั่ง
app.post("/createTempBuzzer", createTempBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsTempBuzzer", getAllCommandsTempBuzzer);
app.get("/commandTempBuzzer/:commandId", singleCommandTempBuzzer);

app.delete("/commandTempBuzzer/:commandId", removeTempBuzzer);
app.put("/commandTempBuzzer/:commandId", modifyTempBuzzer);

//HumidityServo
//สร้างคำสั่ง
app.post("/createHumidityServo", createHumidityServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsHumidityServo", getAllCommandsHumidityServo);
app.get("/commandHumidityServo/:commandId", singleCommandHumidityServo);

app.delete("/commandHumidityServo/:commandId", removeHumidityServo);
app.put("/commandHumidityServo/:commandId", modifyHumidityServo);

//HumidityDc
//สร้างคำสั่ง
app.post("/createHumidityDc", createHumidityDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsHumidityDc", getAllCommandsHumidityDc);
app.get("/commandHumidityDc/:commandId", singleCommandHumidityDc);

app.delete("/commandHumidityDc/:commandId", removeHumidityDc);
app.put("/commandHumidityDc/:commandId", modifyHumidityDc);

//HumidityLed
//สร้างคำสั่ง
app.post("/createHumidityLed", createHumidityLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsHumidityLed", getAllCommandsHumidityLed);
app.get("/commandHumidityLed/:commandId", singleCommandHumidityLed);

app.delete("/commandHumidityLed/:commandId", removeHumidityLed);
app.put("/commandHumidityLed/:commandId", modifyHumidityLed);

//HumiditySolenoid
//สร้างคำสั่ง
app.post("/createHumiditySolenoid", createHumiditySolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsHumiditySolenoid", getAllCommandsHumiditySolenoid);
app.get("/commandHumiditySolenoid/:commandId", singleCommandHumiditySolenoid);

app.delete("/commandHumiditySolenoid/:commandId", removeHumiditySolenoid);
app.put("/commandHumiditySolenoid/:commandId", modifyHumiditySolenoid);

//HumidityBuzzer
//สร้างคำสั่ง
app.post("/createHumidityBuzzer", createHumidityBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsHumidityBuzzer", getAllCommandsHumidityBuzzer);
app.get("/commandHumidityBuzzer/:commandId", singleCommandHumidityBuzzer);

app.delete("/commandHumidityBuzzer/:commandId", removeHumidityBuzzer);
app.put("/commandHumidityBuzzer/:commandId", modifyHumidityBuzzer);

//IrsensorServo
//สร้างคำสั่ง
app.post("/createIrsensorServo", createIrsensorServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsIrsensorServo", getAllCommandsIrsensorServo);
app.get("/commandIrsensorServo/:commandId", singleCommandIrsensorServo);

app.delete("/commandIrsensorServo/:commandId", removeIrsensorServo);
app.put("/commandIrsensorServo/:commandId", modifyIrsensorServo);

//IrsensorDc
//สร้างคำสั่ง
app.post("/createIrsensorDc", createIrsensorDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsIrsensorDc", getAllCommandsIrsensorDc);
app.get("/commandIrsensorDc/:commandId", singleCommandIrsensorDc);

app.delete("/commandIrsensorDc/:commandId", removeIrsensorDc);
app.put("/commandIrsensorDc/:commandId", modifyIrsensorDc);

//IrsensorLed
//สร้างคำสั่ง
app.post("/createIrsensorLed", createIrsensorLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsIrsensorLed", getAllCommandsIrsensorLed);
app.get("/commandIrsensorLed/:commandId", singleCommandIrsensorLed);

app.delete("/commandIrsensorLed/:commandId", removeIrsensorLed);
app.put("/commandIrsensorLed/:commandId", modifyIrsensorLed);

//IrsensorSolenoid
//สร้างคำสั่ง
app.post("/createIrsensorSolenoid", createIrsensorSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsIrsensorSolenoid", getAllCommandsIrsensorSolenoid);
app.get("/commandIrsensorSolenoid/:commandId", singleCommandIrsensorSolenoid);

app.delete("/commandIrsensorSolenoid/:commandId", removeIrsensorSolenoid);
app.put("/commandIrsensorSolenoid/:commandId", modifyIrsensorSolenoid);

//IrsensorBuzzer
//สร้างคำสั่ง
app.post("/createIrsensorBuzzer", createIrsensorBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsIrsensorBuzzer", getAllCommandsIrsensorBuzzer);
app.get("/commandIrsensorBuzzer/:commandId", singleCommandIrsensorBuzzer);

app.delete("/commandIrsensorBuzzer/:commandId", removeIrsensorBuzzer);
app.put("/commandIrsensorBuzzer/:commandId", modifyIrsensorBuzzer);

//LightServo
//สร้างคำสั่ง
app.post("/createLightServo", createLightServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsLightServo", getAllCommandsLightServo);
app.get("/commandLightServo/:commandId", singleCommandLightServo);

app.delete("/commandLightServo/:commandId", removeLightServo);
app.put("/commandLightServo/:commandId", modifyLightServo);

//LightDc
//สร้างคำสั่ง
app.post("/createLightDc", createLightDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsLightDc", getAllCommandsLightDc);
app.get("/commandLightDc/:commandId", singleCommandLightDc);

app.delete("/commandLightDc/:commandId", removeLightDc);
app.put("/commandLightDc/:commandId", modifyLightDc);

//LightLed
//สร้างคำสั่ง
app.post("/createLightLed", createLightLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsLightLed", getAllCommandsLightLed);
app.get("/commandLightLed/:commandId", singleCommandLightLed);

app.delete("/commandLightLed/:commandId", removeLightLed);
app.put("/commandLightLed/:commandId", modifyLightLed);

//LightSolenoid
//สร้างคำสั่ง
app.post("/createLightSolenoid", createLightSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsLightSolenoid", getAllCommandsLightSolenoid);
app.get("/commandLightSolenoid/:commandId", singleCommandLightSolenoid);

app.delete("/commandLightSolenoid/:commandId", removeLightSolenoid);
app.put("/commandLightSolenoid/:commandId", modifyLightSolenoid);

//LightBuzzer
//สร้างคำสั่ง
app.post("/createLightBuzzer", createLightBuzzer);

//LevelServo
//สร้างคำสั่ง
app.post("/createLevelServo", createLevelServo);

//ดึงคำสั่งมาแสดง
app.get("/commandsLevelServo", getAllCommandsLevelServo);
app.get("/commandLevelServo/:commandId", singleCommandLevelServo);

app.delete("/commandLevelServo/:commandId", removeLevelServo);
app.put("/commandLevelServo/:commandId", modifyLevelServo);

//LevelDc
//สร้างคำสั่ง
app.post("/createLevelDc", createLevelDc);

//ดึงคำสั่งมาแสดง
app.get("/commandsLevelDc", getAllCommandsLevelDc);
app.get("/commandLevelDc/:commandId", singleCommandLevelDc);

app.delete("/commandLevelDc/:commandId", removeLevelDc);
app.put("/commandLevelDc/:commandId", modifyLevelDc);

//LevelLed
//สร้างคำสั่ง
app.post("/createLevelLed", createLevelLed);

//ดึงคำสั่งมาแสดง
app.get("/commandsLevelLed", getAllCommandsLevelLed);
app.get("/commandLevelLed/:commandId", singleCommandLevelLed);

app.delete("/commandLevelLed/:commandId", removeLevelLed);
app.put("/commandLevelLed/:commandId", modifyLevelLed);

//LevelSolenoid
//สร้างคำสั่ง
app.post("/createLevelSolenoid", createLevelSolenoid);

//ดึงคำสั่งมาแสดง
app.get("/commandsLevelSolenoid", getAllCommandsLevelSolenoid);
app.get("/commandLevelSolenoid/:commandId", singleCommandLevelSolenoid);

app.delete("/commandLevelSolenoid/:commandId", removeLevelSolenoid);
app.put("/commandLevelSolenoid/:commandId", modifyLevelSolenoid);

//LevelBuzzer
//สร้างคำสั่ง
app.post("/createLevelBuzzer", createLevelBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsLevelBuzzer", getAllCommandsLevelBuzzer);
app.get("/commandLevelBuzzer/:commandId", singleCommandLevelBuzzer);

app.delete("/commandLevelBuzzer/:commandId", removeLevelBuzzer);
app.put("/commandLevelBuzzer/:commandId", modifyLevelBuzzer);

//ดึงคำสั่งมาแสดง
app.get("/commandsLightBuzzer", getAllCommandsLightBuzzer);
app.get("/commandLightBuzzer/:commandId", singleCommandLightBuzzer);

app.delete("/commandLightBuzzer/:commandId", removeLightBuzzer);
app.put("/commandLightBuzzer/:commandId", modifyLightBuzzer);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  async function run() {
    if (firstName == "123" && lastName == "123") {
      res.sendFile(__dirname + "/home.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  }

  run();
});

app.post("/login", function (req, res) {
  res.redirect("/");
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Hello, Start server in port ${port}`);
});

//api key
//53cc39e3f9d8d825b57f64b7f31f985e-us5

//list id
//95c96e81f9
