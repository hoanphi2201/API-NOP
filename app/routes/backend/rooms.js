const express = require('express');
const router = express.Router();
const roomsModel = require(__pathModels + 'rooms');
const paramsHelper = require(__pathHelper + 'params');
const fileHelper = require(__pathHelper + 'file');
const validateRooms = require(__pathValidates + 'rooms')
const systemConfig = require(__pathConfig + 'system');
const uploadAvatar = fileHelper.upload('thumb', 'rooms', 15, 3, 'jpeg|jpg|png|gif');


module.exports = router;
