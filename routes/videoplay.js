//发送文件列表

var express = require('express');
var router = express.Router();

/////////////////////////////////////////////////////////////////////////////////////
//文件访问测试


var fs = require("fs");
var listjson = [];

function movdir(dir, fuc) {

    fs.readdir("public/mov/" + dir + '/', function (err, files) {
        var exp = /mp4$/i;
        if (err) {
            return console.error(err);
        }
        for (var i in files) {
            if (exp.test(files[i])) {
                listjson.push({'dir': files[i].slice(0, -4)});
            }

        }

        fuc();
        listjson = [];
    });


}


/////////////////////////////////////////////////////////////////////////////////////

// videoplay
router.post('/', function (req, res, next) {
    movdir(req.body['movname'], function () {
        //console.log(req.body);
        res.render(
            'videoplay',
            {
                title: req.body['movname'],
                movlist: JSON.stringify(listjson),
            }
        );
    });

})


module.exports = router;






