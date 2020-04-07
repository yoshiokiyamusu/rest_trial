const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const visualController = require('../controllers/visual');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', 
  /*[
    body('title')
      .trim()
      .isLength({ min: 1 })
  ],*/
  feedController.createPost);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // GET /
    router.get('/', visualController.getIndex);
    router.get('/post_user', visualController.getUserPage);
    // POST /
    router.post('/post_user', visualController.postUserData);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = router;