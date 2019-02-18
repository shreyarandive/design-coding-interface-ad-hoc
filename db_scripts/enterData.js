'use strict';

let Post = require('../models/post');
let Comment = require('../models/comment');


let postData = [
    {
        id: 1,
        post_value: 'Cleaning Cleaning Cleaning Cleaning Cleaning',
    },
    {
        id: 2,
        post_value: 'Cooking Cooking Cooking Cooking Cooking Cooking',
    }
];

let commentsData = [
    {
        comment_value: 'hey hey hey hye',
        post_id: 1,
    },
    {
        comment_value: 'ho ho hoho ',
        post_id: 1,
    },
    {
        comment_value: 'xoxoxoxox',
        post_id: 2,
    }
];

User.bulkCreate(userData).then(() => {
    return User.findAll();
}).then(user => {
    console.log('User data entered');
});

Post.bulkCreate(postData).then(() => {
    return Post.findAll();
}).then(task => {
    console.log('Task data entered');

    Comment.bulkCreate(commentsData).then(() => {
        return Comment.findAll();
    }).then(taskAssignedTo => {
        console.log('TaskAssignedTo data entered');
    });
});

