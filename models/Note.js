const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    // users are the users that have access to this note
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports.Note = Note;