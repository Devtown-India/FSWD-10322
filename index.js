const express = require("express");

const todoRoutes = require('./routes/todo')
const authRoutes = require('./routes/auth')

const app = express();

app.use(express.json());

app.use('/todos',todoRoutes)
app.use('/auth',authRoutes)

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});
