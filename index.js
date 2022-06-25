const express = require("express");
const { connectDB } = require("./helpers/db");
const authRouter = require("./routes/auth");
const notesRouter = require("./routes/notes");

connectDB()

const app = express();
app.use(express.json());

app.use('/auth',authRouter)
app.use('/notes',notesRouter)

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});

