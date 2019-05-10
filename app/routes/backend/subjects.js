const express = require('express');
const router = express.Router();
const subjectsModel    = require(__pathModels  + 'subjects');
const examsModel    = require(__pathModels + 'exams');
const paramsHelper  = require(__pathHelper + 'params');
const validateSubjects = require(__pathValidates + 'subjects')
const systemConfig = require(__pathConfig + 'system');



module.exports = router;
