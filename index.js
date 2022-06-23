const express = require("express");
const { batch } = require("react-redux");
const { connectDB } = require("./helpers/db");
const User = require("./model/User");

connectDB()

const app = express();

app.use(express.json());

app.post('/',async (req,res)=>{
  try {
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
    await user.save()
    res.send(user)
  } catch (error) {
    console.log(error)
  }
})

app.get('/:name',async (req,res)=>{
  try {
    const{name} = req.params
    const users =  await User.find({name}).select("name email -_id")
    res.send(users)
  } catch (error) {
    console.log(error)
  }
})

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});

