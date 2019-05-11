
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(async function (id, done) {
        usersModel.findById(id, 'id avatar local.username name status email group')
                .populate({path: 'group', model: 'groups', select: { '_id': 1,'name':1, 'group_acp': 1} })
                .exec(function (err, user) {
                    if (err) return handleError(err);
                    done(err, user);
                });
    });
    /*--------------------------------------------
     |  passport đăng nhập local
     --------------------------------------------*/
    passport.use('local-login', new LocalStrategy({
        usernameField: `username`,
        passwordField: `password`,
        passReqToCallback: true
    }, function (req, username, password, done) {
        process.nextTick(function () {
            usersModel.findOne({ 'local.username': username, status: 'active', 'facebook.id': undefined, 'google.id': undefined }, 'local id name avatar', function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false,  { message: 'Thông tin đăng nhập không chính xác!' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Thông tin đăng nhập không chính xác!' });
                }
                return done(null, user);
              });
        })
    })
    );
    /*--------------------------------------------
     |  passport đăng nhập facebook
     --------------------------------------------*/
     passport.use('facebook-login', new LocalStrategy({
        usernameField: `id`,
        passwordField: `name`,
        passReqToCallback: true
    }, function (req, username, password, done) {
        process.nextTick(function () {
            usersModel.findOne({ 'facebook.id': username }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, user);
                } else {
                    let avatarName = randomstring.generate(15) + '.png';
                    const options = {
                        url: `https://graph.facebook.com/${req.body.id}/picture?type=large`,
                        dest: 'public/uploads/users/' + avatarName
                    }
                    download.image(options)
                        .then(({ filename, image }) => {
                            let newUser = new usersModel({
                                local : {
                                    username : stringHelper.nonAccentVietnamese(req.body.first_name) + stringHelper.nonAccentVietnamese(req.body.last_name)
                                },
                            
                                name: req.body.name,
                                email: req.body.email,
                                school: '',
                                phonenumber: '',
                                status : 'active',
                                group: '5c750d2295033604111f2c07',
                                created : {
                                    user_id: systemConfig.system_admin_id,
                                    user_name: systemConfig.system_admin_name,
                                    time: Date.now()
                                },
                                modified: {
                                    user_id: systemConfig.system_admin_id,
                                    user_name: systemConfig.system_admin_name,
                                    time: Date.now()
                                },
                                facebook : {
                                    id           : req.body.id,
                                    token        : req.body.accessToken,
                                },
                                avatar: avatarName
                            });
                            newUser.save(function (err) {
                                if (err)
                                    throw err;
                                return done(null, newUser);
                            });
                        })
                        .catch((err) => {
                            return done(err);
                        })
                }
            });
        });
    }));
  
    
};



