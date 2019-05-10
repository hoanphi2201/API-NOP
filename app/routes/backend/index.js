const express = require('express');
const router = express.Router();

router.use('/subject',middleAuthenticationBackend, require('./subjects'));
router.use('/exam',middleAuthenticationBackend, require('./exams'));
router.use('/groups',middleAuthenticationBackend, require('./groups'));
router.use('/users',middleAuthenticationBackend, require('./users'));
router.use('/category',middleAuthenticationBackend, require('./categories'));
router.use('/article', middleAuthenticationBackend, require('./articles'));
router.use('/rooms', middleAuthenticationBackend, require('./rooms'));
function middleAuthenticationBackend(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.json({
            status: 404,
            isLogin: false,
            message: 'Login to continue ...'
        });
    }
}
module.exports = router;
