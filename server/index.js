const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// import userModel from models
const userModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database (MongoDB)
mongoose.connect("mongodb://127.0.0.1:27017/user-management-system");

// data api
app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

// create user api
app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
