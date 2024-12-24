const express = require("express")
const router = express.Router()
const { handleUserSignUp, handleUserSignIn } = require("../controllers/user")

router.route('/signin').post(handleUserSignIn)
router.route('/signup').post(handleUserSignUp)

module.exports = router