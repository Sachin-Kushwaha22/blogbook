const { getUser } = require("../service/auth")

async function restrictUserLogin(req, res, next){
        const userToken = req.cookies?.token

        if(!userToken) return res.redirect('/signin')
        console.log(userToken);
    
    const userDetail = getUser(userToken)
    if(!userDetail) return res.redirect('/signin')
        
        console.log(userDetail);
        req.userDetail = userDetail
        next()
}

module.exports = {
    restrictUserLogin,
    checkauth,
}