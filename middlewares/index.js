const { verifyJWT,decodeJWT } = require("../helpers/jwt")

const validateSignup = (req,res,next)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password) return res.send("Invalid field/s")
    return next()
}

const validateLogin = (req,res,next)=>{
    const {email,password} = req.body
    if( !email || !password) return res.send("Invalid field/s")
    return next()
}

const isAuthorised = (req,res,next)=>{
    const token = req.headers['auth']
    if(verifyJWT(token)){
        const {id} = decodeJWT(token)
        req.user = id
        next()
    }
    else return res.send("Access denied")
}

module.exports = {
    validateSignup,
    validateLogin,
    isAuthorised
}