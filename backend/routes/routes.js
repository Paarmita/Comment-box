var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = function(app){

          app.get('/comments', (req, res) => {
              console.log('------------------------------',Comment);
                Comment.find((err, comments) => {
                  if (err) return res.json({ success: false, error: err });
                  return res.json({ success: true, data: comments });
                });
          });

          app.post('/comments', (req, res) => {
                  const comment = new Comment();

                  const { author, text } = req.body;
                  if (!author || !text) {
                    return res.json({
                      success: false,
                      error: 'You must provide an author and comment'
                    });
                  }
                  comment.author = author;
                  comment.text = text;
                  comment.save(err => {
                    if (err) return res.json({ success: false, error: err });
                    return res.json({ success: true });
                  });
          });

          app.put('/comments/:commentId', (req, res) => {
                  const { commentId } = req.params;
                  if (!commentId) {
                    return res.json({ success: false, error: 'No comment id provided' });
                  }
                  Comment.findById(commentId, (error, comment) => {
                    if (error) return res.json({ success: false, error });
                    const { author, text } = req.body;
                    if (author) comment.author = author;
                    if (text) comment.text = text;
                    comment.save(error => {
                      if (error) return res.json({ success: false, error });
                      return res.json({ success: true });
                    });
                  });
          });

          app.delete('/comments/:commentId', (req, res) => {
                  const { commentId } = req.params;
                  if (!commentId) {
                    return res.json({ success: false, error: 'No comment id provided' });
                  }
                  Comment.remove({ _id: commentId }, (error, comment) => {
                    if (error) return res.json({ success: false, error });
                    return res.json({ success: true });
                  });
          });


};