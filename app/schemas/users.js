const databaseConfig = require(__pathConfig + 'database')
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
let schema = new mongoose.Schema({
                name: String, 
                status: String,
                ordering: Number,
                content: String,
                avatar: String,
                group: { 
                    type: mongoose.Schema.Types.ObjectId,
                    ref: databaseConfig.col_groups
                },
                email: String,
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
                phonenumber: String,
                school: String,
                facebook_link: String,
                local            : {
                    username        : String,
                    password     : String,
                },
                facebook         : {
                    id           : String,
                    token        : String,
                },
                twitter          : {
                    id           : String,
                    token        : String,
                    displayName  : String,
                    username     : String
                },
                google           : {
                    id           : String,
                    token        : String
                },
                codeResetPass: String,
                totalPoint: {
                    type: Array, default: []
                },
                examID: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: databaseConfig.col_exams
                    }
                ],
                requestTo: [
                    {user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: databaseConfig.col_users
                    }}
                ],
                requestFrom: [
                    {user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: databaseConfig.col_users
                    }}
                ],
                friendList: [
                    {user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: databaseConfig.col_users
                    }}
                ],
                notification: [
                    {content: String, icon: { type: String, default: 'notifications_none' }, created: Date}
                ]

            });
// ===================== methods ======================
// phương thực sinh chuỗi hash
schema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// kiểm tra password có hợp lệ không
schema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model(databaseConfig.col_users, schema);