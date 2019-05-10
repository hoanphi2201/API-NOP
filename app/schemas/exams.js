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
                exam_pdf: String,
                subject:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: databaseConfig.col_subjects
                },
                rates: Number,
                counts: Number,
                level: String,
                questions: Array,
                price: Number,
                time: Number,
                created:{
                    user_id:  String,
                    user_name: String,
                    time: Date
                },
                number_questions: Number,
                modified:{
                    user_id:  String,
                    user_name: String,
                    time: Date
                },
                user_took_exam: Object,
                user_rank: [
                    {
                        user: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: databaseConfig.col_users
                        },
                        trueAnswer: Number
                    }
                ],
                onlineExam: String,
                online: {
                    timeStart: Date,
                },
                type_question: { type: String, default: 'pdf' }
            });
module.exports = mongoose.model(databaseConfig.col_exams, schema);