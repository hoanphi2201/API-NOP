const express = require('express');
const router = express.Router();
const subjectsModel = require(__pathModels + 'subjects');
const examsModel = require(__pathModels + 'exams');
const paramsHelper = require(__pathHelper + 'params');

module.exports = router;
