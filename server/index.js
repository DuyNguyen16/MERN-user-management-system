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

// get a specific user data by id
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((id) => res.json(id))
    .catch((err) => console.log(err));
});

// update user
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, status: req.body.status }
    )
    .then((id) => res.json(id))
    .catch((err) => console.log(err));
});

// delete user
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;

  userModel
    .findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
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
