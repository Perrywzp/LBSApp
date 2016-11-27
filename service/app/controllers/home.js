var express = require('express'),
  path = require('path'),
  router = express.Router(),
  fs = require('fs'),
  PATH = path.normalize(__dirname+'../../../public/data/');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  if (!req.session.user) {
    return res.render('login', {});
  }
  res.render('index', {});
});

router.get('/login', function (req, res, next) {
  res.render('login', {});
});

router.get('/tuijian', function (req, res, next) {
  if (!req.session.user) {
    return res.render('login', {});
  }
  res.render('tuijian', {});
});

router.get('/edit', function (req, res, next) {
  if (!req.session.user) {
    return res.render('login', {});
  }
  var type = req.query.type;

  if (type) {
    var obj = {};
    switch (type) {
      case 'essay':
        obj = {};
        break;
      case 'it':
        obj = {};
        break;
      case 'manage':
        obj = {};
        break;
      case 'cookies':
        obj = {};
        break;
      default:
        return res.send({
          status: 0,
          info: '参数错误'
        });
        break;
    }
    fs.readFile(PATH + type + '.json',"utf-8", (err, data)=>{
      console.log(err);
      if(err){
        return res.send({
          status:0,
          info:'fail......'
        })
      }
      var obj = JSON.parse(data.toString());
      return res.render('edit',{
        data:obj
      })
    });

  }else{
    return res.send({
      status:0,
      info :'参数错误'
    })
  }
});
