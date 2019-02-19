'use strict';

let Post = require('../models/Post');
let Comment = require('../models/Comment');
let Coding = require('../models/Coding');

console.log(" ====== Start all tables deletion ====== ");
Coding.drop().then(() => {
    Comment.drop().then(() => {
        Post.drop().then(() => {
            console.log(" ====== End all tables deletion ====== ");
            process.exit(0);
        })
    });
});
