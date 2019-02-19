'use strict';

let db   = require('../db');

let Post = db.define('posts_ashdesign', {
        db_id: {
            type: db._Sequelize.INTEGER,
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
        permalink: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        post_id: {
            type: db._Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        post_date: {
            type: db._Sequelize.DATE,
            allowNull: false
        },
        author: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        title: {
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
        relatedURL: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        post_hint: {
            type: db._Sequelize.STRING,
            allowNull: false
        },
        score: {
            type: db._Sequelize.INTEGER,
            allowNull: false
        },
        num_comments: {
            type: db._Sequelize.STRING,
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
        lastupdated: {
            type: db._Sequelize.TIME,
            allowNull: false
        },
        random: {
            type: db._Sequelize.DOUBLE,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


module.exports = Post;