'use strict';

let db   = require('../db');
let post = require('./Post');

let Comment = db.define('comments_assholedesign_40', {
        db_comment_id: {
            type: db._Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        source_type: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
        source: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        post_id: {
            type: db._Sequelize.STRING,
            primaryKey: true,
            references: {
                model: post,
                key: 'post_id',
            }
        },
        parent_id: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        comment_id: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        comment_date: {
            type: db._Sequelize.DATE,
            allowNull: false
        },
        author: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        message: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        meta: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        is_deleted: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
        relatedURL: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        score: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
        ups: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
        downs: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


module.exports = Comment;
