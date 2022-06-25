const router = require("express").Router();
const { verifyPassword } = require("../helpers/utils");
const { User } = require("../models/index");
const { createJWT } = require("../helpers/jwt");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const user = new User({ firstName, lastName, username, email, password });
    await user.save();
    const data = {
      success: true,
      data: { user },
      message: "User created successfully",
    };
    res.status(201).json(data);
  } catch (error) {
    const data = {
      success: false,
      data: { user: null },
      message: error.message,
    };
    res.status(400).json(data);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // check if user exists
    if (!user)
      return res.json({
        success: false,
        data: { token: null },
        message: "User does not exist",
      });
    // verify the password
    const isAuthorised = verifyPassword(password, user);
    if (isAuthorised) {
      const token = createJWT({
        id: user._id,
        email: user.email,
      },'7d');
      const data = {
        success: true,
        data: { token },
        message: "login success",
      };
      res.status(201).json(data);
    } else {
      return res.json({
        success: false,
        data: { token: null },
        message: "Incorrect password",
      });
    }

  } catch (error) {
    const data = {
      success: false,
      data: { user: null },
      message: error.message,
    };
    res.status(400).json(data);
  }
});

module.exports = router;
