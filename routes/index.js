var express = require('express');
var router = express.Router();

/////////////////////////////////////////////////////////////////////////////////////
//文件访问测试


var fs = require("fs");
var listjson = [];

function movdir(fuc) {

    fs.readdir("public/mov/", function (err, files) {
        if (err) {
            return console.error(err);
        }
        for (var i in files) {
            listjson.push({'dir': files[i]});
        }
        fuc();
        listjson = [];
    });
}


/////////////////////////////////////////////////////////////////////////////////////

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.send(JSON.stringify(movdir('')));
    movdir(function () {
        res.render('index', {
            title: '共享视频',
            movlist: JSON.stringify(listjson),

        });
    })

});


module.exports = router;
