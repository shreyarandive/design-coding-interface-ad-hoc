'use strict';

let db = require('../db');

let Coding = db.define('coding_ashdesign', {
        db_id: {
            type: db._Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        post_id: {
            type: db._Sequelize.STRING,
            allowNull: false,
        },
        comment_id: {
            type: db._Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phatic: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        issues_concern: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        issues_concern_virtue_ethics: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        issues_concern_consequentialist_ethics: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        issues_concern_deontological_ethics: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy_types_legal: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy_types_shame: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy_types_hack: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy_directed_to_individual: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        proposed_remedy_directed_to_society: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers_extends: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers_example: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers_conditional: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers_disagree_counter: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        modifiers_futuring: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        sub_level_conversational_shift: {
            type: db._Sequelize.INTEGER,
            default: 0
        },
        code_notes: {
            type: db._Sequelize.STRING,
            default: ""
        },
        status: {
            type: db._Sequelize.STRING,
            default: 0
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);


module.exports = Coding;