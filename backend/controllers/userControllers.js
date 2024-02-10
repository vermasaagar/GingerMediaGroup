const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, password, contact, dob, discription } = req.body;

  const user = new User({
    name: name,
    email: email,
    password: password,
    contact: contact,
    dob: dob,
    discription: discription,
  });

  await user.save();

  res.status(200).json({
    success: "You're registered",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userData = await User.findOne({ email });

  if (!userData)
    return res.status(404).json({
      message: "User not found",
    });

  if (userData.password === password) {
    return res.status(200).json({
      email: userData.email,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Incorrect password",
    });
  }
});

router.get("/getUserDetails", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  const userDetails = await User.findOne({ email });

  if (!userDetails) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json(userDetails);
});

router.patch("/editUserDetails", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  for (let key in req.body) {
    if (key !== "email") {
      user[key] = req.body[key];
    }
  }

  await user.save();

  return res.status(200).json({
    success: true,
    message: "User details updated successfully",
  });

});

module.exports = router;
