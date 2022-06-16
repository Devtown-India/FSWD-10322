const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { validateSignup, validateLogin } = require("../middlewares/index");
const {createJWT} = require('../helpers/jwt')

router.post("/signup", validateSignup, (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = JSON.parse(
      fs.readFileSync(path.join(path.resolve(), "users.json"), {
        encoding: "UTF-8",
      })
    );

    if(users.find(user=>user.email==email)) return res.send("User already exists")

    const user = {
      name,
      email,
      password,
      id: uuidv4(),
    };

    users.push(user);

    fs.writeFileSync(
      path.join(path.resolve(), "users.json"),
      JSON.stringify(users)
    );
    //   console.log(todo);
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.post("/login", validateLogin, (req, res) => {
  try {
    const { email, password } = req.body;
    const users = JSON.parse(
      fs.readFileSync(path.join(path.resolve(), "users.json"), {
        encoding: "UTF-8",
      })
    );

    const user = users.find(user=>user.email===email)

    if(!user) return res.send("User not found !!")
    if(user.password!=password) return res.send("Incorrect password")
    // verified user
    res.json({
        token: createJWT({id:user.id,email:user.email})
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = router;
