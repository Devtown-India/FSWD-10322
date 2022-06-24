const router = require("express").Router();
const { User } = require("../models/index");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    console.log(User)
    const user = new User({ firstName, lastName, username, email, password });
    await user.save();
    const data = {
        success: true,
        data: {user},
        message: "User created successfully"
    }
    res.status(201).json(data);
  } catch (error) {
      const data = {
        success: false,
        data: {user:null},
        message: error.message
    }
    res.status(400).json(data);
  }
});


module.exports = router;
