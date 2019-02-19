'use strict';

let Comment = require('../models/Comment');
let Coding = require('../models/Coding');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');

let totalComments = 0;
let totalPosts = 0;

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');


module.exports = {
    loadMainPage: {
        get: function (req, res) {

            //check if post_count is a valid number using check util
            //console.log(req.params.page_count);
            let pageCount = Number(req.params.page_count);

            if (totalPosts > 0 && pageCount === 0) {
                Post.count()
                    .then(count => {
                        console.log("Total posts found " + count);
                        totalPosts = count;
                    })
                    .catch(err => {
                        console.log("Error finding total posts " + err);
                    });
            }


            Post.findOne({offset: pageCount, limit: 1})

                .then(single_post => {

                    Comment.findAll({
                        where: {post_id: single_post.post_id},
                        attributes: ['message', 'post_id', 'parent_id', 'comment_id']
                    })

                        .then(comments_for_one_post => {

                            let i;
                            let comments = [];
                            let index = 0;
                            for (i = 0; comments_for_one_post[i] != null; i++) {
                                if (comments_for_one_post[i].post_id === comments_for_one_post[i].parent_id) {
                                    let comment = {
                                        comment_id: comments_for_one_post[i].comment_id,
                                        message: comments_for_one_post[i].message,
                                        sub_comments: []
                                    };
                                    createCommentTree(comments_for_one_post, comments_for_one_post[i].comment_id, comment);
                                    comments[index] = comment;
                                    index++;
                                }
                            }

                            totalComments = i;

                            let postData = {
                                post_id: single_post.post_id,
                                prev_page: pageCount - 1,
                                next_page: pageCount + 1,
                                total_comments: totalComments,
                                total_posts: totalPosts,
                                post_link: "https://www.reddit.com/" + single_post.permalink,
                                all_comments: comments
                            };
                            res.send({post_data: postData});
                        })

                        .catch(err => {

                            console.log("Error Comments: " + err);

                            let response = {
                                status_code: 500,
                                msg: 'comment fetching error'
                            };

                            res.send(response);
                        })
                })

                .catch(err => {
                    console.log("Error post " + err);
                    let response = {
                        status_code: 500,
                        msg: 'fetching post error'
                    };

                    res.send(response);
                });
        },

        post: function (req, res) {

            if (checkUtil.isNotEmpty(req.current_comment)) {
                let response = {
                    status_code: 500,
                    msg: 'error'
                };

                res.send(response);
                return;
            }

            let commentIndex = Number(req.params.current_comment);
            let commentsArr = postData.data;
            console.log("Question submitted for comment " + commentsArr[commentIndex]);

            req.checkBody('code_notes', 'Empty').notEmpty();
            if (req.validationErrors()) {
                console.log("error", req.validationErrors());
            }

            // TODO Update DB with comment Id and answers

            postData.curr_comment = commentIndex + 1;
            postData.curr_id = commentIDs[postData.curr_comment];
            res.render('index', {post_data: postData});
            console.log(postData.curr_id, postData.curr_comment)
        },
    },

    submitCoding: {
        post: function (req, res) {
            if (checkUtil.isEmpty(req.body.answer_coding)) {
                let response = {
                    status_code: 500,
                    msg: 'error'
                };

                res.send(response);
                return;
            }

            // let commentIndex = Number(req.params.current_comment);
            // let commentsArr = postData.data;
            // console.log("Question submitted for comment " + commentsArr[commentIndex]);
            //
            // req.checkBody('code_notes','Empty').notEmpty();
            // if(req.validationErrors()) {
            //     console.log("error",req.validationErrors());
            // }

            Coding.create(req.body.answer_coding)
                .then(coding => {
                    console.log("Added the answers for the coding " + coding);

                })
                .catch(err => {
                    console.log("Error adding the coding "+ err);
                });
        },
    }
};


function createCommentTree(postData, commentId, parentComment) {
    let index = 0;
    for (let i = 0; postData[i] != null; i++) {
        let comment = postData[i];

        if (comment.parent_id.includes(commentId)) {
            let subComment = {
                comment_id: comment.comment_id,
                message: comment.message,
                sub_comments: []
            };
            parentComment.sub_comments[index] = subComment;
            index++;
            createCommentTree(postData, comment.comment_id, subComment);
        }
    }
}