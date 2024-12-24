const jwt = require("jsonwebtoken")
const secret = process.env.SECRET_KEY

function setUser(user){
    const payload = {
        _id: user._id,
        name: user.username,
        email: user.email,
    }

    return jwt.sign(payload, secret)
}

function getUser(token){
    if(!token) return null
    return jwt.verify(token, secret) 
}

module.exports = {
    setUser,
    getUser,
}