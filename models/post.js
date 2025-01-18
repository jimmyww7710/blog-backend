const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: Array
    },
    imgUrls: {
        type: Array
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;