
const usersModel = require(__pathSchemas + 'users');
const randomstring = require("randomstring");
const mailHelper = require(__pathHelper + 'mail');
module.exports = function (app, passport) {
    /*--------------------------------------------
     |  auth đăng nhập local
     --------------------------------------------*/
     app.post('/auth/user/login', function (req, res, next) {    
        passport.authenticate('local-login', function (err, user, info) {
            if (err) {
                return next(err);
            }            
            if (!user) {
                return res.json({ error: 
                    { message: 'Username or password is incorrect' }
                });
            }
            req.logIn(user, function (err) {
                
                if (err) {
                    return res.json({ error: 
                        { message: 'Username or password is incorrect' }
                    });
                }
                return res.json({
                    status: 200,
                    name: user.name,
                    avatar: user.avatar,
                    username: user.local.username,
                    id: user.id,
                });
            });
        })(req, res, next);
    });
    /*--------------------------------------------
     |  auth đăng nhập FACEBOOK
     --------------------------------------------*/
     app.post('/auth/user/login-facebook', function (req, res, next) {    
        passport.authenticate('facebook-login', function (err, user, info) {
            if (err) {
                return next(err);
            }            
            if (!user) {
                return res.json({ error: 
                    { message: 'Username or password is incorrect' }
                });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return res.json({ error: 
                        { message: 'Username or password is incorrect' }
                    });
                }
                return res.json({
                    status: 200,
                    name: user.name,
                    avatar: user.avatar,
                    username: user.local.username,
                    id: user.id
                });
            });
        })(req, res, next);
    });
     /*--------------------------------------------
     |  auth Đăng nhập GOOGLE
     --------------------------------------------*/
     app.post('/auth/user/login-google', function (req, res, next) {    
        passport.authenticate('google-login', function (err, user, info) {
            if (err) {
                return next(err);
            }            
            if (!user) {
                return res.json({ error: 
                    { message: 'Username or password is incorrect' }
                });
            }
            req.logIn(user, function (err) {
                
                if (err) {
                    return res.json({ error: 
                        { message: 'Username or password is incorrect' }
                    });
                }
                return res.json({
                    status: 200,
                    name: user.name,
                    avatar: user.avatar,
                    username: user.local.username,
                    id: user.id
                });
            });
        })(req, res, next);
    });
    
}
    
