const { Schema, model } = require('mongoose');

const PostScema = new Schema({
    userId: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Post = model('post', PostScema);