const express = require("express");
const { connectDB } = require("./helpers/db");

connectDB()

const app = express();

app.use(express.json());


app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});

