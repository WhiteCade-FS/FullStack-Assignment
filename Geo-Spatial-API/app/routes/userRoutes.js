const express = require("express");
const { saveUser, findUser } = require("../db/db");
const router = express.Router();
const User = require("../ models/user");
const mongoose = require("mongoose");
const { successTemplate, errorTemplate } = require("../templates/templates");

// 1. GET users
router.get("/", (req, res, next) => {
  console.log("Getting Users");
  findUser({})
    .then((result) => {
      successTemplate(res, "User Retrieved", result);
    })
    .catch((err) => {
      errorTemplate(res, err.message, err.status);
    });
});

// 2. Post - Add new User
router.post("/", (req, res) => {
  console.log("Saving new User");
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    fName: fName,
    lName: lName,
    email: email,
  });

  saveUser(newUser)
    .then((result) => {
      successTemplate(res, "User Saved", result);
    })
    .catch((err) => {
      errorTemplate(res, err.message, err.status);
    });
});

module.exports = router;
