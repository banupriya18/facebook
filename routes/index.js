const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");

/* GET home page. */
router.get("/", function(req, res, next) {
  Post.find({}, [], {
    sort: {
      createdAt: "desc"
    }
  })
    .populate("comments")
    .exec(function(err, posts) {
      res.render("wall", {
        posts: posts
      });
    });
});

router.post("/comments/:id/likes", function(req, res, next) {
  Comment.findById(req.params.id, function(err, comment) {
    comment.likes += 1;
    comment.save(function(err) {
      return res.json({
        success: true,
        likes: comment.likes
      });
    });
  });
});

router.post("/posts/:id/likes", function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
    post.likes += 1;
    post.save(function(err) {
      return res.json({
        success: true,
        likes: post.likes
      });
    });
  });
});

module.exports = router;
