const express = require("express");
const router = express.Router();
const { isAuthorised } = require("../middlewares/index");
const { User, Note } = require("../models/index");

router.post("/add", isAuthorised, async (req, res) => {
  try {
    const userId = req.user;
    const { title, content } = req.body;
    const note = new Note({
      title,
      content,
      author: userId,
    });

    await note.save();

    await User.findByIdAndUpdate(userId,{
        $push:{notes:note._id}
    })
    // ! second approach
    // const user = await User.findById(userId);
    // const userNotes = user.notes;
    // userNotes.push(note._id);
    // await user.save();
    // console.log(user);
    // await User.findByIdAndUpdate(userId,user)
    const data = {
      success: true,
      data: { note },
      message: "Note added successfully",
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    const data = {
      success: false,
      data: { note: null },
      message: error.message,
    };
    res.status(400).json(data);
  }
});

module.exports = router;
