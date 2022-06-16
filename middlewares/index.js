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


module.exports = {
    validateSignup,
    validateLogin
}