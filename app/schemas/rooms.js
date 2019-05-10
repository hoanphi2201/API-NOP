const databaseConfig = require(__pathConfig + 'database')
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
let schema = new mongoose.Schema({
                name: String, 
                slug: String,
                status: String,
                ordering: Number,
                content: String,
                thumb: String,
                member: [
                    {user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: databaseConfig.col_users
                    }}
                ],
                created:{
                    user_id: String,
                    user_name: String,
                    time: Date
                },
                modified:{
                    user_id: String,
                    user_name: String,
                    time: Date
                },
                category: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: databaseConfig.col_categories
                }
            });
module.exports = mongoose.model(databaseConfig.col_room, schema);