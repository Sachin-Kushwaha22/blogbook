const mongoose = require("mongoose")

const blogScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

}, { timestamps: true })

const BLOG = mongoose.model("blogData", blogScheme)

module.exports = BLOG