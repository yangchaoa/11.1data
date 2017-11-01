var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM data',function(err,rows){
    // pool.query('SELECT COUNT(*) FROM data',function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows);
  })
});

router.post('/gain', function(req, res, next) {
    var a=(req.body.num-1)*2;
    console.log(a)
    pool.query(`SELECT * FROM data LIMIT ${a},2`,function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows);
  })
});

router.get('/duxian', function(req, res, next) {
  pool.query(`SELECT * FROM data LIMIT 0,2`,function(err,rows){
  res.header('Access-Control-Allow-Origin','*');
  res.send(rows);
})
});

module.exports = router;
