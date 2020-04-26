const fs = require('fs');

const placeholder = require('../placeholder.json')
const router = require('express').Router();

/**
 * @route  GET api_v1/posts
 * @desc   get all posts
 * */
router.get('/posts', (req, res) => {
    const postsArray = placeholder['posts'];
    return res.send({ posts: postsArray });
});

/**
 * @route  GET api_v1/posts/userId
 * @desc   get posts of user id
 * */
router.get('/posts/:userId', (req, res) => {
    const { userId } = req.params;

    const postsArray = placeholder['posts'].filter(posts => posts.userId === parseInt(userId));
    return res.send({ posts: postsArray });
});

module.exports = router;