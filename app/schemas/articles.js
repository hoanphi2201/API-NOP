const databaseConfig = require(__pathConfig + 'database')
const mongoose = require('mongoose');
let schema = new mongoose.Schema({
                name: String, 
                status: String,
                slug: String,
                special: String,
                ordering: Number,
                content: String,
                thumb: String,
                category:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: databaseConfig.col_categories
                },
                created:{
                    user_id: String,
                    user_name: String,
                    user_avatar: String,
                    time: Date
                },
                modified:{
                    user_id: String,
                    user_name: String,
                    time: Date
                },
                subject:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: databaseConfig.col_subjects
                },
                counts: Number
            });
module.exports = mongoose.model(databaseConfig.col_articles, schema);