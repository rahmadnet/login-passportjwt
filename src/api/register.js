const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { id,kode,first_name, last_name, email, password } = req.body;
  
  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
    );
    
    if (alreadyExistsUser) {
      return res.status(409).json({ message: "User with email already exists!" });
    }
    
    const newUser = new User({ id,kode,first_name, last_name, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering", data: newUser });
});

module.exports = router;
