const databaseConfig = require(__pathConfig + 'database')
const mongoose = require('mongoose');
let schema = new mongoose.Schema({
                name: String, 
                status: String,
                ordering: Number,
                content: String,
                slug: String,
                icon: String,
                created:{
                    user_id: String,
                    user_name: String,
                    time: Date
                },
                modified:{
                    user_id: String,
                    user_name: String,
                    time: Date
                }
            });
module.exports = mongoose.model(databaseConfig.col_subjects, schema);