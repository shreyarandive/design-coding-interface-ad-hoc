'use strict';

let Comment = require('../models/Comment');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');
let db = require('../db');
let pageCount;

module.exports = {
    loadMainPage: {
        get: function (req, res) {

            //check if post_count is a valid number using check util
            console.log(req.params.page_count);
            pageCount= Number(req.params.page_count);

            Post.findOne({offset: pageCount, limit: 1})

                .then(single_post => {
                    Comment
                        .findAll({  where: {post_id: single_post.post_id},
                                            attributes: ['message', 'post_id','parent_id','comment_id']})

                        .then(comments_for_one_post => {

                            let response = {
                                prev_page: pageCount - 1,
                                next_page: pageCount + 1,
                                data: comments_for_one_post,
                                post_link: single_post.permalink,
                            };
                            res.render('index', {post_data: response});
                            //res.send(response);
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

        post(req, res) {

        }
    },

    redirectTo:{
        get: function (){
            console.log("hereeeeeee");
            this.loadMainPage.get();
        }
    }
};