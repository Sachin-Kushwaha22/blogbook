const FEEDBACK = require("../models/feedback")

async function handleFeedback(req, res){
    
    const data = req.body.feedback
    await FEEDBACK.create({
        feedback: data
    })
    return res.status(200).json({
        "message": "Feedback submitted successfully"
    })
}

module.exports = {
    handleFeedback,
}