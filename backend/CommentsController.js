'use strict';

let Comment = require('../models/Comment');
let Coding = require('../models/Coding');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');

let codingStatusInDB = [];
let totalComments = 0;
let totalPosts = 0;

module.exports = {
    loadMainPage: {
        get: function (req, res) {

            let pageCount = Number(req.params.page_count);

            if (totalPosts > 0 || pageCount === 0) {
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

                    Coding.findAll({
                        where: {post_id: single_post.post_id},
                        attributes: ['status', 'comment_id']
                        })

                        .then(coding_for_one_post=>{

                            for(let j = 0; coding_for_one_post[j] != null; j++) {
                                codingStatusInDB[coding_for_one_post[j].comment_id] = coding_for_one_post[j].status;
                                console.log("STATUS--->", codingStatusInDB[coding_for_one_post[j].comment_id], coding_for_one_post[j].comment_id);
                            }
                        })

                        .catch(err=> {
                            console.log("Error Comments: " + err);

                            let response = {
                                status_code: 500,
                                msg: 'comment fetching error'
                            };

                            res.send(response);
                        })

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
        }
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

            let codes = req.body.answer_coding;

            const codesObj = {
                        post_id: codes.post_id,
                        comment_id: codes.comment_id,
                        phatic: codes.phatic ? 1 : 0,
                        issues_concern: codes.issues_concern ? 1 : 0,
                        issues_concern_virtue_ethics: codes.issues_concern_virtue_ethics ? 1 : 0,
                        issues_concern_consequentialist_ethics: codes.issues_concern_consequentialist_ethics ? 1 : 0,
                        issues_concern_deontological_ethics: codes.issues_concern_deontological_ethics ? 1 : 0,
                        proposed_remedy: codes.proposed_remedy ? 1 : 0,
                        proposed_remedy_types_legal: codes.proposed_remedy_types_legal ? 1 : 0,
                        proposed_remedy_types_shame: codes.proposed_remedy_types_shame ? 1 : 0,
                        proposed_remedy_types_hack: codes.proposed_remedy_types_hack ? 1 : 0,
                        proposed_remedy_directed_to_individual: codes.proposed_remedy_directed_to_individual ? 1 : 0,
                        proposed_remedy_directed_to_society: codes.proposed_remedy_directed_to_society ? 1 : 0,
                        modifiers: codes.modifiers ? 1 : 0,
                        modifiers_extends: codes.modifiers_extends ? 1 : 0,
                        modifiers_example: codes.modifiers_example ? 1 : 0,
                        modifiers_conditional: codes.modifiers_conditional ? 1 : 0,
                        modifiers_disagree_counter: codes.modifiers_disagree_counter ? 1 : 0,
                        modifiers_futuring: codes.modifiers_futuring ? 1 : 0,
                        sub_level_conversational_shift: codes.sub_level_conversational_shift ? 1 : 0,
                        code_notes: codes.code_notes,
                        status: 1
            };

            Coding.bulkCreate([codesObj],
                {updateOnDuplicate: ['phatic',
                        'issues_concern',
                        'issues_concern_virtue_ethics',
                        'issues_concern_consequentialist_ethics',
                        'issues_concern_deontological_ethics',
                        'proposed_remedy',
                        'proposed_remedy_types_legal',
                        'proposed_remedy_types_shame',
                        'proposed_remedy_types_hack',
                        'proposed_remedy_directed_to_individual',
                        'proposed_remedy_directed_to_society',
                        'modifiers',
                        'modifiers_extends',
                        'modifiers_example',
                        'modifiers_conditional',
                        'modifiers_disagree_counter',
                        'modifiers_futuring',
                        'sub_level_conversational_shift',
                        'code_notes']})
            .then(coding => {
                console.log("Added the codes for the coding " + coding);
                res.send({status_code: 200})
            })
            .catch(err => {
                console.log("Error adding the coding " + err);
                res.send({
                    status_code: 500,
                    msg: 'Failed to add coding to DB ' + err
                })
            });
        },
    },

    getStatus: {
        get: function (req, res) {
            if (checkUtil.isEmpty(req.params.comment_id)) {
                let response = {
                    status_code: 500,
                    msg: 'Comment Id cannot be null'
                };

                res.send(response);
                return;
            }


            Coding.findOne({
                where: {comment_id: req.params.comment_id}
            }).then(coding => {
                console.log("Found coding");
                res.send({status_code: 200, answer_coding: getCodingAnswersForUI(coding, req.params.comment_id)});
            }).catch(err => {
                res.send({
                    status_code: 500,
                    msg: 'Failed to find coding to DB ' + err
                })
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

function getCodingAnswersForUI(codingUI, commentId) {
    const defaultCoding = {
        post_id: -1,
        comment_id: commentId,
        phatic: false,
        issues_concern: false,
        issues_concern_virtue_ethics: false,
        issues_concern_consequentialist_ethics: false,
        issues_concern_deontological_ethics: false,
        proposed_remedy: false,
        proposed_remedy_types_legal: false,
        proposed_remedy_types_shame: false,
        proposed_remedy_types_hack: false,
        proposed_remedy_directed_to_individual: false,
        proposed_remedy_directed_to_society: false,
        modifiers: false,
        modifiers_extends: false,
        modifiers_example: false,
        modifiers_conditional: false,
        modifiers_disagree_counter: false,
        modifiers_futuring: false,
        sub_level_conversational_shift: false,
        code_notes: "",
        status: false
    };

    if (checkUtil.isNotEmpty(codingUI)) {
        defaultCoding.phatic = codingUI.phatic === 1;
        defaultCoding.issues_concern = codingUI.issues_concern === 1;
        defaultCoding.issues_concern_virtue_ethics = codingUI.issues_concern_virtue_ethics === 1;
        defaultCoding.issues_concern_consequentialist_ethics = codingUI.issues_concern_consequentialist_ethics === 1;
        defaultCoding.issues_concern_deontological_ethics = codingUI.issues_concern_deontological_ethics === 1;
        defaultCoding.proposed_remedy = codingUI.proposed_remedy === 1;
        defaultCoding.proposed_remedy_types_legal = codingUI.proposed_remedy_types_legal === 1;
        defaultCoding.proposed_remedy_types_shame = codingUI.proposed_remedy_types_shame === 1;
        defaultCoding.proposed_remedy_types_hack = codingUI.proposed_remedy_types_hack === 1;
        defaultCoding.proposed_remedy_directed_to_individual = codingUI.proposed_remedy_directed_to_individual === 1;
        defaultCoding.proposed_remedy_directed_to_society = codingUI.proposed_remedy_directed_to_society === 1;
        defaultCoding.modifiers = codingUI.modifiers === 1;
        defaultCoding.modifiers_extends = codingUI.modifiers_extends === 1;
        defaultCoding.modifiers_example = codingUI.modifiers_example === 1;
        defaultCoding.modifiers_conditional = codingUI.modifiers_conditional === 1;
        defaultCoding.modifiers_disagree_counter = codingUI.modifiers_disagree_counter === 1;
        defaultCoding.modifiers_futuring = codingUI.modifiers_futuring === 1;
        defaultCoding.sub_level_conversational_shift = codingUI.sub_level_conversational_shift === 1;
        defaultCoding.code_notes = codingUI.code_notes;
    }

    return defaultCoding;
}