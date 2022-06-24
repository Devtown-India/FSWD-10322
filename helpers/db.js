const mongoose = require('mongoose')
const DB_URI = ""

const connectDB = async () => {
    try {
        await mongoose.connect()
    } catch (error) {
        console.log(error)
    }
}