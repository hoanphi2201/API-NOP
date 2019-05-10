const express = require('express');
const router = express.Router();

const categoriesModel    = require(__pathModels  + 'categories');
const articlesModel    = require(__pathModels + 'articles');
const roomsModel    = require(__pathModels + 'rooms');
const paramsHelper  = require(__pathHelper + 'params');
const validateCategories = require(__pathValidates + 'categories')
const systemConfig = require(__pathConfig + 'system');

module.exports = router;
