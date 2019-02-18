'use strict';

let db = require('../db');
let Coding = require('../models/Coding');
let Comment = require('../models/comment');

Comment.hasMany(Coding, {foreignKey: 'post_id comment_id', onDelete: 'CASCADE', hooks: true});

db.sync();
