const express = require("express")
const cors = require("cors")
const path = require("path")
const { connectToDatabase } = require("./connection")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 9010
const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")
const userStaticRoute = require("./routes/staticUser")
const blogStaticRoute = require("./routes/staticBlog")
const feedbackRoute = require("./routes/feedback")
const { restrictUserLogin, checkauth } = require("./middlewares/auth")

connectToDatabase("mongodb+srv://sachin8n:sachin2219@nodetesting01.n48lb.mongodb.net/authentication-practise-database")
    .then(() => { console.log("Connected to database !!") })
    .catch((err) => { console.log("Error connecting to database !!", err) })

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join('public')))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


app.use('/user', userRoute)
app.use('/', checkauth, userStaticRoute)
app.use('/blog', restrictUserLogin, blogStaticRoute)
app.use('/post', checkauth, blogRoute)
app.use('/feedback', feedbackRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})