const BLOG = require("../models/blog")

async function handleBlogPost(req, res) {
    const { title, content} = req.body
    console.log(req.body);

    try {
        await BLOG.create({ title, description:content});
        res.status(200).json({'message':'blog saved successfully','status':200});
    } catch (error) {
        console.error("Validation Error:", error);
        return res.status(400).send("Validation Error: " + error.message);
    }
}

async function handleViewBlogPost(req, res) {
    const blogs = await BLOG.find({})
    res.json(blogs)
}

async function handleViewBlogPostId(req, res){
    const { id } = req.params
    const blog = await BLOG.findById(id)
    res.json(blog)
}


module.exports = {
    handleBlogPost,
    handleViewBlogPost,
    handleViewBlogPostId,
}