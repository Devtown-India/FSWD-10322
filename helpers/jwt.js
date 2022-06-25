const jwt = require('jsonwebtoken')
const secret = "TOP_SECRET_123@#$"

const createJWT = (payload,exipry="1d")=> jwt.sign(payload,secret,{expiresIn:exipry})

const verifyJWT = (token)=> {
    try {
        const data = jwt.verify(token,secret)
        if(data) return true;
        else return false;
    } catch (error) {
         return false;
    }
}

const decodeJWT = (token)=> jwt.decode(token)

module.exports = {
    createJWT,verifyJWT,decodeJWT
}

