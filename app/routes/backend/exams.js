const express = require('express');
const router = express.Router();
const examsModel = require(__pathModels + 'exams');
const examsSchema = require(__pathSchemas + 'exams');
const paramsHelper = require(__pathHelper + 'params');
const fileHelper = require(__pathHelper + 'file');
const validateExams = require(__pathValidates + 'exams');
const systemConfig = require(__pathConfig + 'system');

module.exports = router;
