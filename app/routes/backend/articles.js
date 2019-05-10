const express = require('express');
const router = express.Router();
const articlesModel = require(__pathModels + 'articles');
const paramsHelper = require(__pathHelper + 'params');
const fileHelper = require(__pathHelper + 'file');
const validateArticles = require(__pathValidates + 'articles')
const uploadThumb = fileHelper.upload('thumb', 'articles', 10, 1, 'jpeg|jpg|png|gif');
const systemConfig = require(__pathConfig + 'system');

module.exports = router;
