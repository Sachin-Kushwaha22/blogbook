const mongoose = require('mongoose')


const feedbackSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'practiseuser',
    },
    feedback: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const FEEDBACK = mongoose.model("feedback", feedbackSchema)

module.exports = FEEDBACK