var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// router.get('/',   
// / 对应根路径 例如访问 http://localhost:3000/users
// /abc 不对应根路径 例如访问 http://localhost:3000/users 会是404 要访问 http://localhost:3000/users/abc
module.exports = router;
