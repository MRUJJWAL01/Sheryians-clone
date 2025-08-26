const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;

    const isAlreadyExsit = await userModel.findOne({ username, email });

    if (isAlreadyExsit) {
      res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await userModel.create({
      username:String(req.body.username),
      email:String(req.body.email),
      password:String(req.body.password),
    });
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      "key"
    );
    res.status(201).json({
      message: "user Created",
      user,
      token
    });
  } catch (error) {
    console.log(error);
    
  }
});

module.exports = router;
