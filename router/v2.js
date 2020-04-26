const router = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Post = require('../models/Post');

/**
 * @route  GET api_v2/posts
 * @desc   get all posts
 * */
router.get('/posts', async (req, res) => {
    await Post.find({}, (error, posts) => {
        if (error) return res.status(500).send({ error });
        return res.send({ posts });
    })
});

/**
 * @route  UPDATE api_v2/posts
 * @desc   get all posts of user id
 * */
router.patch('/posts', async (req, res) => {
    const { title, completed, _id } = req.body;
    if (!ObjectId.isValid(_id))
        return res.status(400).send({ error: 'id must be mongodb valid id' });

    const oldPost = await Post.findOneAndUpdate({ _id }, { title, completed });
    return res.send({ oldPost });
});

module.exports = router;