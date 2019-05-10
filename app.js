var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');

var session = require('express-session');
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var moment = require('moment-timezone');
var passport = require('passport');
var cors = require('cors')
var bodyParser = require('body-parser')
var socket_io    = require( "socket.io" );

/*---------------------------------------
|Define path
---------------------------------------*/
const pathConfig = require('./path');
global.__base = __dirname + '/';
global.__pathApp = __base + pathConfig.folderApp + '/';
global.__pathConfig = __pathApp + pathConfig.folderConfig + '/';
global.__pathHelper = __pathApp + pathConfig.folderHelper + '/';
global.__pathRoutes = __pathApp + pathConfig.folderRoutes + '/';
global.__pathSchemas = __pathApp + pathConfig.folderSchemas + '/';
global.__pathValidates = __pathApp + pathConfig.folderValidates + '/';
global.__pathViews = __pathApp + pathConfig.folderViews + '/';
global.__pathViews_Admin = __pathViews + pathConfig.folderModuleAdmin + '/';
global.__pathViews_Blog = __pathViews + pathConfig.folderModuleBlog + '/';
global.__pathModels = __pathApp + pathConfig.folderModels + '/';
global.__pathPublic = global.__base + pathConfig.folderPublic + '/';
global.__pathUploads = __pathPublic + pathConfig.folderUploads + '/';
const systemConfig = require(__pathConfig + 'system');
const databaseConfig = require(__pathConfig + 'database');
require(`${__pathConfig}/passport`)(passport);

const validator = require('express-validator');
/*---------------------------------------
| Connection mongoDB
-----------------------------------------*/
// mongodb://${databaseConfig.username}:${databaseConfig.password}@ds231740.mlab.com:31740/${databaseConfig.database}
mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0-raqjg.mongodb.net/${databaseConfig.database}?retryWrites=true`, { useNewUrlParser: true });

var app = express();



/*---------------------------------------
|Sesion and passport
---------------------------------------*/
app.use(cors({ origin: [
    'https://localhost:4200',
    'http://localhost:4200',
    'http://localhost:3000'
], credentials: true}))
// app.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });
var io           = socket_io();
app.io           = io;
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 100
    }
}
));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
// app.use(cors());
/*---------------------------------------
|Nofiitycation
---------------------------------------*/
app.use(flash());
app.use(function(req, res, next){
    res.locals.messages = req.flash();
    next();
})
/*---------------------------------------
|Validate dữ liệu
---------------------------------------*/
app.use(validator({
    customValidators: {
        isNotEqual: (value1, value2) => {
            return value1 !== value2;
        }
    }
}));
/*---------------------------------------
|View engine setup
---------------------------------------*/
app.set('view engine', 'ejs');
/*---------------------------------------
|Sử dụng express layout
---------------------------------------*/
app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Local variable
app.locals.systemConfig = systemConfig;
app.locals.moment = moment;

// app.use('', require(__pathRoutes + 'frontend/chat')(io));
// LOGIN
require(__pathRoutes + 'frontend/auth')(app, passport);
/*---------------------------------------
|Backend
---------------------------------------*/
app.use(`/${systemConfig.prefixAdmin}`, require(__pathRoutes + 'backend/index'));
/*---------------------------------------
|Frontend
---------------------------------------*/
app.use(`/${systemConfig.prefixBlog}`, require(__pathRoutes + 'frontend/index')(io));
module.exports = app;
