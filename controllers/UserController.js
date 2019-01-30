'use strict';

let Comment = require('../models/Comment');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');
let db = require('../db');
let counter = -1;

module.exports = {
    loadMainPage: {
        get: function (req, res) {

            counter++;

            Post.findOne({offset: Number(req.params.post_count), limit: 1})

                .then(single_post => {
                    Comment
                        .findAll({  where: {post_id: single_post.post_id},
                                            attributes: ['message']})

                        .then(comments_for_one_post => {
                            let response = {
                                data: comments_for_one_post,
                            };
                            res.send(response);
                        })

                        .catch(err => {

                            console.log("Error Comments: " + err);
                            let response = {
                                status_code: 500,
                                msg: 'comment fetching error'
                            };
                        })
                })

                .catch(err => {
                    console.log("Error post " + err);
                    let response = {
                        status_code: 500,
                        msg: 'fetching post error'
                    };
                });
        },

        post(req, res) {
        }
    }
};