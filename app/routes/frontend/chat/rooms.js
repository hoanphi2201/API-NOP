const chatsModel = require(__pathModels + 'chats');
const roomsModel = require(__pathModels + 'rooms');
const chatsRoomModel = require(__pathModels + 'chats_room');
const UserRoom = require(__pathHelper + 'user_room');
const paramsHelper = require(__pathHelper + 'params');
module.exports = function(io) {
    let usersRoom = new UserRoom();
    const express = require('express');
    const router = express.Router();
    
    return router;
}