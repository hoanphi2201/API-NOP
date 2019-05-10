const chatsModel = require(__pathModels + 'chats');
const roomsModel = require(__pathModels + 'rooms');
const UserServer = require(__pathHelper + 'user_server');
const paramsHelper = require(__pathHelper + 'params');
const usersModel = require(__pathModels + 'users');
module.exports = function(io) {
    let users = new UserServer();
    const express = require('express');
    const router = express.Router();
    
    return router;
}