'use strict';

let express = require('express');
let Controller = require('../backend/CommentsController');
let router = express.Router();

router.get('/', function(req, res) {
    res.render("home", {title: '#ashdesign Coding'});
});

router.get('/comment-analysis/:page_count', Controller.loadMainPage.get);
router.post('/submit-coding', Controller.submitCoding.post);
router.get('/get-status/:comment_id', Controller.getStatus.get);
router.get('/visual-analysis/:page_count', Controller.loadMainPage.get);
router.get('/sequence-analysis', Controller.getAllPostData.get);
router.get('/sequence-analysis-temp', Controller.getAllPostData.get);

module.exports = router;