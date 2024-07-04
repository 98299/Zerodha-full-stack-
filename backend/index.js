require('dotenv').config();
const express = require("express");
const moongoose = require("mongoose");
const {Holdingmodel}=require("./Model/Holdingmodel");
const { PositionsModel } = require("./Model/PositionsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL

const { UserModel } = require('./Model/Usermodel');
const app = express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
moongoose.connect(uri);

//app.get("/addPositions", async (req, res) => {
   // let tempPositions = [
  //      {
 //           product: "CNC",
  //          name: "EVEREADY",
  //          qty: 2,
 //           avg: 316.27,
 //           price: 312.35,
 //           net: "+0.58%",
 //          day: "-1.24%",
  //          isLoss: true,
 //       },
 //       {
  //          product: "CNC",
  //          name: "JUBLFOOD",
 //           qty: 1,
  //          avg: 3124.75,
  //          price: 3082.65,
 //           net: "+10.04%",
//day: "-1.35%",
//            isLoss: true,
    //    },
   // ];

   // tempPositions.forEach((item) => {
   //     let newPosition = new PositionsModel({
  //          product: item.product,
  //          name: item.name,
    //        qty: item.qty,
  //          avg: item.avg,
  //          price: item.price,
  //          net: item.net,
   //         day: item.day,
   //         isLoss: item.isLoss,
   //     });

  //      newPosition.save();
  //  });
  //  res.send("Done!");
//});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdingmodel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/sign', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new UserModel({ email, password });
    await newUser.save();
    res.status(201).send('User registered successfully');
   
  } catch (err) {
    console.error('Error during user registration:', err.message);
    res.status(400).send('Error: ' + err.message);
  }
});

app.listen(PORT, () => {
    console.log("hii")
    moongoose.connect(uri);
    console.log("db connected")
}) 