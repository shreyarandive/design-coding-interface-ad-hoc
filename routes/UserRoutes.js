'use strict';

let express = require('express');
let Controller = require('../controllers/UserController');
let router = express.Router();

router.get('/comment-analysis/:page_count', Controller.loadMainPage.get);
router.post('/comment-analysis/:page_count/:current_comment', Controller.loadMainPage.post);

module.exports = router;