'use strict';

let Post = require('../models/post');
let Comment = require('../models/comment');

Comment.drop().then(() => {
    Post.drop();
});
