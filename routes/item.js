var express = require('express');
var router = express.Router();

var mysql=require('mysql')
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456'
})
/* GET home page. */
router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	pool.query('SELECT * FROM qq.item',function(err,rows){
		res.send(rows)
	})
})
router.post('/delete',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*')
	var id=req.body.id
	pool.query('DELETE FROM qq.item WHERE id='+id , function(err,rows){
		res.send(rows)
	})
})
router.post("/insert",function(req,res,next){
	var aa=req.body.name;
	res.header('Access-Control-Allow-Origin','*');
	pool.query('INSERT INTO qq.item(name) VALUES ("'+aa+'")',function(err,rows){
		res.send(rows)
	})
})
module.exports = router;
