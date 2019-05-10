const express = require('express');
const router = express.Router();
const usersModel = require(__pathModels + 'users');
const paramsHelper = require(__pathHelper + 'params');
const fileHelper = require(__pathHelper + 'file');
const validateUsers = require(__pathValidates + 'users')
const systemConfig = require(__pathConfig + 'system');
const uploadAvatar = fileHelper.upload('avatar', 'users', 15, 3, 'jpeg|jpg|png|gif');


module.exports = router;
