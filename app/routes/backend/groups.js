const express = require('express');
const router = express.Router();
const groupsModel    = require(__pathModels  + 'groups');
const usersModel    = require(__pathModels + 'users');
const paramsHelper  = require(__pathHelper + 'params');
const validateGroups = require(__pathValidates + 'groups')
const systemConfig = require(__pathConfig + 'system');



module.exports = router;
