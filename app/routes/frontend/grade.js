const express = require('express');
const router = express.Router();
const folderView = __pathViews_Blog + 'pages/grade/';
const layoutBlog = __pathViews_Blog + 'frontend';
const categoriesModel = require(__pathModels + 'categories');
const paramsHelper = require(__pathHelper + 'params');
const categoriesSchemas = require(__pathSchemas + 'categories');

module.exports = router;
