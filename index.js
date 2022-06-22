const express = require("express");
const mongoose = require("mongoose")

const MONGO_URI = "mongodb+srv://katik:12345@class.sujvt.mongodb.net/test"

const connectDB = async ()=>{
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to the DB")
  } catch (error) {
    console.log(error)
  }
}

connectDB()

const app = express();

app.use(express.json());


app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});
