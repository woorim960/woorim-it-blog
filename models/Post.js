// models/Post.js

var mongoose = require('mongoose');

// schema
var postSchema = mongoose.Schema({
    title: {
        type: String, 
        required: [true, '필수 입력사항입니다.']
    },
    body: {
        type: String, 
        required:[true, '필수 입력사항입니다.']
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: { type: Date },
});

// model & export
var Post = mongoose.model('post', postSchema);
module.exports = Post;