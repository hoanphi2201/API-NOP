const databaseConfig = require(__pathConfig + 'database')
const mongoose = require('mongoose');
let schema = new mongoose.Schema({
                user    : {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : 'users'
                },
                room: String,
                content : String,
                created : Date
            });
module.exports = mongoose.model(databaseConfig.col_chats_room, schema);