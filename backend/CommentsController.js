'use strict';

let Coding = require('../models/Coding');
let Post = require('../models/Post');
let checkUtil = require('../utils/checkUtil');
let db = require("../db");

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

                    db.query("SELECT `comments_assholedesign_25`.`message`, `comments_assholedesign_25`.`post_id`, `comments_assholedesign_25`.`parent_id`, " +
                        "`comments_assholedesign_25`.`comment_id`, `coding_assholedesign_25`.`comment_id` AS is_coded, `coding_assholedesign_25`.`phatic`, " +
                        "`coding_assholedesign_25`.`issues_concern`, `coding_assholedesign_25`.`proposed_remedy` , `coding_assholedesign_25`.`modifiers`," +
                        "`coding_assholedesign_25`.`sub_level_conversational_shift` FROM `comments_assholedesign_25` LEFT JOIN `coding_assholedesign_25` " +
                        "ON `coding_assholedesign_25`.`comment_id` = `comments_assholedesign_25`.`comment_id` WHERE " +
                        "`comments_assholedesign_25`.`post_id` = \"" + single_post.post_id + "\"", {type: db.QueryTypes.SELECT})

                        .then(comments_for_one_post => {

                            let i;
                            let comments = [];
                            let index = 0;
                            for (i = 0; comments_for_one_post[i] != null; i++) {
                                if (comments_for_one_post[i].post_id === comments_for_one_post[i].parent_id) {
                                    let comment = {
                                        comment_id: comments_for_one_post[i].comment_id,
                                        message: comments_for_one_post[i].message,
                                        is_coded: checkUtil.isNotEmpty(comments_for_one_post[i].is_coded),
                                        sub_comments: [],
                                        is_collapsed: false,
                                        visual_class: getClass(comments_for_one_post[i])
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
                        });
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
                code_notes: codes.code_notes
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
    },

    getAllPostData: {
        get: function (req, res)
        {
            Post.findAll()

                .then(all_posts => {

                    let postArray = [];
                    for(let j = 0 ; j < all_posts.length ; j++) {
                        db.query("SELECT `comments_assholedesign_25`.`message`, `comments_assholedesign_25`.`post_id`, `comments_assholedesign_25`.`parent_id`, " +
                            "`comments_assholedesign_25`.`comment_id`, `coding_assholedesign_25`.`comment_id` AS is_coded, `coding_assholedesign_25`.`phatic`, " +
                            "`coding_assholedesign_25`.`issues_concern`, `coding_assholedesign_25`.`proposed_remedy` , `coding_assholedesign_25`.`modifiers`," +
                            "`coding_assholedesign_25`.`sub_level_conversational_shift` FROM `comments_assholedesign_25` LEFT JOIN `coding_assholedesign_25` " +
                            "ON `coding_assholedesign_25`.`comment_id` = `comments_assholedesign_25`.`comment_id` WHERE " +
                            "`comments_assholedesign_25`.`post_id` = \"" + all_posts[j].post_id + "\"", {type: db.QueryTypes.SELECT})

                            .then(comments_for_one_post => {

                                let i;
                                let comments = [];
                                let index = 0;
                                for (i = 0; comments_for_one_post[i] != null; i++) {
                                    if (comments_for_one_post[i].post_id === comments_for_one_post[i].parent_id) {
                                        let comment = {
                                            comment_id: comments_for_one_post[i].comment_id,
                                            message: comments_for_one_post[i].message,
                                            is_coded: checkUtil.isNotEmpty(comments_for_one_post[i].is_coded),
                                            sub_comments: [],
                                            is_collapsed: false,
                                            visual_class: getClass(comments_for_one_post[i])
                                        };
                                        createCommentTree(comments_for_one_post, comments_for_one_post[i].comment_id, comment);
                                        comments[index] = comment;
                                        index++;
                                    }
                                }

                                totalComments = i;

                                let posts = {
                                    post_id: all_posts[j].post_id,
                                    total_comments: totalComments,
                                    total_posts: totalPosts,
                                    post_link: "https://www.reddit.com/" + all_posts.permalink,
                                    all_comments: comments
                                };

                                postArray.push(posts);

                                if (j === all_posts.length - 1)
                                {
                                    res.send({post_data: postArray});
                                }

                            })

                            .catch(err => {

                                console.log("Error Comments: " + err);

                                let response = {
                                    status_code: 500,
                                    msg: 'comment fetching error'
                                };

                                res.send(response);
                            });
                    }
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
                is_coded: checkUtil.isNotEmpty(comment.is_coded),
                is_collapsed: false,
                sub_comments: [],
                visual_class: getClass(comment)
            };
            parentComment.sub_comments[index] = subComment;
            index++;
            createCommentTree(postData, comment.comment_id, subComment);
        }
    }
}

function getCodingAnswersForUI(codingResponse, commentId) {
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
        code_notes: ""
    };

    if (checkUtil.isNotEmpty(codingResponse)) {
        defaultCoding.phatic = codingResponse.phatic === 1;
        defaultCoding.issues_concern = codingResponse.issues_concern === 1;
        defaultCoding.issues_concern_virtue_ethics = codingResponse.issues_concern_virtue_ethics === 1;
        defaultCoding.issues_concern_consequentialist_ethics = codingResponse.issues_concern_consequentialist_ethics === 1;
        defaultCoding.issues_concern_deontological_ethics = codingResponse.issues_concern_deontological_ethics === 1;
        defaultCoding.proposed_remedy = codingResponse.proposed_remedy === 1;
        defaultCoding.proposed_remedy_types_legal = codingResponse.proposed_remedy_types_legal === 1;
        defaultCoding.proposed_remedy_types_shame = codingResponse.proposed_remedy_types_shame === 1;
        defaultCoding.proposed_remedy_types_hack = codingResponse.proposed_remedy_types_hack === 1;
        defaultCoding.proposed_remedy_directed_to_individual = codingResponse.proposed_remedy_directed_to_individual === 1;
        defaultCoding.proposed_remedy_directed_to_society = codingResponse.proposed_remedy_directed_to_society === 1;
        defaultCoding.modifiers = codingResponse.modifiers === 1;
        defaultCoding.modifiers_extends = codingResponse.modifiers_extends === 1;
        defaultCoding.modifiers_example = codingResponse.modifiers_example === 1;
        defaultCoding.modifiers_conditional = codingResponse.modifiers_conditional === 1;
        defaultCoding.modifiers_disagree_counter = codingResponse.modifiers_disagree_counter === 1;
        defaultCoding.modifiers_futuring = codingResponse.modifiers_futuring === 1;
        defaultCoding.sub_level_conversational_shift = codingResponse.sub_level_conversational_shift === 1;
        defaultCoding.code_notes = codingResponse.code_notes;
    }

    return defaultCoding;
}

function getClass(comment)
{
    let html_class = ''

    if(comment.phatic === 1)
    {
        html_class += 'phatic '
    }

    if(comment.issues_concern === 1)
    {
        html_class += 'issues '
    }

    if(comment.modifiers === 1)
    {
        html_class += 'modifiers ';
    }

    if(comment.proposed_remedy === 1)
    {
        html_class += 'remedy ';
    }

    if(comment.sub_level_conversational_shift === 1)
    {
        html_class += 'shift ';
    }

    return html_class;
}