var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var showvideo = require('./routes/showvideo');
var videoplay = require('./routes/videoplay');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/showvideo', showvideo);
app.use('/videoplay', videoplay);


/*

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
*/


module.exports = app;

///////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
//sqlite3应用测试

/*

var sqlite3 = require('sqlite3');
sqlite3.verbose();
var db = new sqlite3.Database('D:/mypoj/nodejs_express/fordatabase/mssql/public/db/mdb.db');

db.serialize(function () {
    db.each('SELECT * from test', function (err, row) {
        console.log(row);
    });
})

db.close()

*/

/////////////////////////////////////////////////////////////////////////////////////
//文件访问测试

var fs = require("fs");
var listjson = [];
fs.readdir("public/mov", function (err, files) {
    if (err) {
        return console.error(err);
    }
    for (var i in files) {
        listjson.push({'dir': files[i]});
    }

});

///////////////////////////////////////////////////////////////////////////////////////////