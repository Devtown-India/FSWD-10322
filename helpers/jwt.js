const jwt = require('jsonwebtoken')
const secret = "TOP_SECRET_123@#$"
const payload = {
    userId:"a18b",
    email:"temp@mail.com"
}

const token = jwt.sign(payload,secret,{
    expiresIn:"100s"
})

console.log(token)