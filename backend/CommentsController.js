'use strict';

let Comment = require('../models/Comment');
let Coding = require('../models/Coding');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');

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

            let answers = req.body.answer_coding;

            const answersObj = {
                post_id: answers.post_id,
                comment_id: answers.comment_id,
                phatic: answers.phatic ? 1 : 0,
                issues_concern: answers.issues_concern ? 1 : 0,
                issues_concern_virtue_ethics: answers.issues_concern_virtue_ethics ? 1 : 0,
                issues_concern_consequentialist_ethics: answers.issues_concern_consequentialist_ethics ? 1 : 0,
                issues_concern_deontological_ethics: answers.issues_concern_deontological_ethics ? 1 : 0,
                proposed_remedy: answers.proposed_remedy ? 1 : 0,
                proposed_remedy_types_legal: answers.proposed_remedy_types_legal ? 1 : 0,
                proposed_remedy_types_shame: answers.proposed_remedy_types_shame ? 1 : 0,
                proposed_remedy_types_hack: answers.proposed_remedy_types_hack ? 1 : 0,
                proposed_remedy_directed_to_individual: answers.proposed_remedy_directed_to_individual ? 1 : 0,
                proposed_remedy_directed_to_society: answers.proposed_remedy_directed_to_society ? 1 : 0,
                modifiers: answers.modifiers ? 1 : 0,
                modifiers_extends: answers.modifiers_extends ? 1 : 0,
                modifiers_example: answers.modifiers_example ? 1 : 0,
                modifiers_conditional: answers.modifiers_conditional ? 1 : 0,
                modifiers_disagree_counter: answers.modifiers_disagree_counter ? 1 : 0,
                modifiers_futuring: answers.modifiers_futuring ? 1 : 0,
                sub_level_conversational_shift: answers.sub_level_conversational_shift ? 1 : 0,
                code_notes: answers.code_notes
            };

            Coding.create(answersObj)
                .then(coding => {
                    console.log("Added the answers for the coding " + coding);
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

function getCodingAnswersForUI(coding, commentId) {
    const defaultAnswers = {
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
        code_notes: ""
    };

    if (checkUtil.isNotEmpty(coding)) {
        defaultAnswers.phatic = coding.phatic === 1;
        defaultAnswers.issues_concern = coding.issues_concern === 1;
        defaultAnswers.issues_concern_virtue_ethics = coding.issues_concern_virtue_ethics === 1;
        defaultAnswers.issues_concern_consequentialist_ethics = coding.issues_concern_consequentialist_ethics === 1;
        defaultAnswers.issues_concern_deontological_ethics = coding.issues_concern_deontological_ethics === 1;
        defaultAnswers.proposed_remedy = coding.proposed_remedy === 1;
        defaultAnswers.proposed_remedy_types_legal = coding.proposed_remedy_types_legal === 1;
        defaultAnswers.proposed_remedy_types_shame = coding.proposed_remedy_types_shame === 1;
        defaultAnswers.proposed_remedy_types_hack = coding.proposed_remedy_types_hack === 1;
        defaultAnswers.proposed_remedy_directed_to_individual = coding.proposed_remedy_directed_to_individual === 1;
        defaultAnswers.proposed_remedy_directed_to_society = coding.proposed_remedy_directed_to_society === 1;
        defaultAnswers.modifiers = coding.modifiers === 1;
        defaultAnswers.modifiers_extends = coding.modifiers_extends === 1;
        defaultAnswers.modifiers_example = coding.modifiers_example === 1;
        defaultAnswers.modifiers_conditional = coding.modifiers_conditional === 1;
        defaultAnswers.modifiers_disagree_counter = coding.modifiers_disagree_counter === 1;
        defaultAnswers.modifiers_futuring = coding.modifiers_futuring === 1;
        defaultAnswers.sub_level_conversational_shift = coding.sub_level_conversational_shift === 1;
        defaultAnswers.code_notes = coding.code_notes;
    }

    return defaultAnswers;
}