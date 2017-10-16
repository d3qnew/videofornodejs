//返回要播放的目录名和文件名

var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    //console.log(req.body['videoNumber']);
    res.render('showvideo', {
        movname: req.body['movname'],
        number: req.body['videoNumber']
    });
});

module.exports = router;
