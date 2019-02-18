'use strict';

let Comment = require('../models/Comment');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');
let pageCount;
let postData;
let commentIDs = [];
let totalComments;

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


module.exports = {
    loadMainPage: {
        get: function (req, res) {

            commentIDs = [];

            //check if post_count is a valid number using check util
            //console.log(req.params.page_count);
            pageCount = Number(req.params.page_count);

            Post.findOne({offset: pageCount, limit: 1})

                .then(single_post => {

                    Comment.findAll({
                            where: {post_id: single_post.post_id},
                            attributes: ['message', 'post_id', 'parent_id', 'comment_id']
                            })

                            .then(comments_for_one_post => {

                                let i;
                                for(i = 0; comments_for_one_post[i] != null ; i++)
                                {
                                    commentIDs.push(comments_for_one_post[i].comment_id);
                                }

                                totalComments = i;

                                postData = {
                                    prev_page: pageCount - 1,
                                    next_page: pageCount + 1,
                                    curr_page: pageCount,
                                    curr_comment: 0,
                                    tot_comments: totalComments,
                                    all_comment_ids: commentIDs,
                                    curr_id: commentIDs[0],
                                    data: comments_for_one_post,
                                    post_link: single_post.permalink,
                                };
                                res.render('index', {post_data: postData});
                                console.log(single_post.post_id,commentIDs[0], totalComments);
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

        post: function(req, res)
        {

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

            req.checkBody('code_notes','Empty').notEmpty();
            if(req.validationErrors())
                console.log("error",req.validationErrors());

            // TODO Update DB with comment Id and answers

            postData.curr_comment = commentIndex + 1;
            postData.curr_id = commentIDs[postData.curr_comment];
            res.render('index', {post_data: postData});
            console.log(postData.curr_id, postData.curr_comment)
        },
    }
};