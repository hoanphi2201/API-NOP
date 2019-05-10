const express = require('express');
const router = express.Router();
const folderView = __pathViews_Blog + 'pages/post/';
const layoutBlog = __pathViews_Blog + 'frontend';
const subjectSchemas = require(__pathSchemas + 'subjects');
const categoriesSchemas = require(__pathSchemas + 'categories');
const articlesSchemas = require(__pathSchemas + 'articles');
const articlesModel = require(__pathModels + 'articles');
const subjectsModel = require(__pathModels + 'subjects');
const paramsHelper = require(__pathHelper + 'params');

module.exports = router;
