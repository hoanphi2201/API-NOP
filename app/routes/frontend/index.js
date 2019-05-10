

module.exports = function(io) {
    const express = require('express');
    const router = express.Router();
    router.use('/do-exam', require('./do-exam'));
    router.use('/home', require('./home'));
    router.use('/exam', require('./exams'))
    router.use('/profile', require('./profile'));
    router.use('/grade', require('./grade'));
    router.use('/room-test', require('./room-test'));
    router.use('/post', require('./post'));
    router.use('/chat', require('./chat/chats')(io));
    return router;
}
