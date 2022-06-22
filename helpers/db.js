const mongoose = require("mongoose")

const MONGO_URI = "mongodb+srv://kartik:12345@class.sujvt.mongodb.net/test"


module.exports.connectDB = async ()=>{
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to the DB")
  } catch (error) {
    console.log(error)
  }
}