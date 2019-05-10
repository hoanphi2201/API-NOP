const express = require('express');
const router = express.Router();
const usersModel = require(__pathSchemas + 'users');
const paramsHelper = require(__pathHelper + 'params');
const fileHelper = require(__pathHelper + 'file');
const uploadAvatar = fileHelper.upload('avatar', 'users', 10, 3, 'jpeg|jpg|png|gif');


module.exports = router;
