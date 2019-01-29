'use strict';

let Comment = require('../models/Comment');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');
let db = require('../db');

module.exports = {
    loadMainPage: {
        get(req, res) {
            Comment.findAll({

            }).then(comment => {
                let response = {
                    status_code: 200,
                    msg: 'user profile founded',
                    data: comment,
                };
                    res.send(response)
            }).catch(err => {
                console.log("in error " + err);
                let response = {
                    status_code: 500,
                    msg: 'fetching profile error'
                };
                res.send(response);
            });
        },

        post(req, res) {
        }
    }
};