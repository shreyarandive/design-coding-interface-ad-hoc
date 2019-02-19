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

module.exports = router;