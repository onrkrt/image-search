'use strict'
var express = require("express");
var gis = require('./src/gis');
var db = require('./src/connect');
db();
var url_model = require('./models/url_model');

var app = express();


app.get('/api/imagesearch/:q',function(req,res){
	//res.send(req.params.q+' query:'+req.query.offset);
	let my_res = [];
	let query_time = new Date();
	let _query = req.params.q;
	var history = new url_model({term:_query,when:query_time.toJSON()});
	history.save((err)=>{if(err) console.log('can not save history')}) 
	gis(req.params.q,(err,r)=>{
		if(err) return;

		for(let i = 0;i<req.query.offset;i++){
			my_res.push({'url':r[i].url,'snippet':r[i].description,'thumbnail':r[i].pageUrl});
		}
		res.send(my_res);
	})
})

app.get('/api/latest/imagesearch',(req,res)=>{
	url_model.find({},'term when',(err,history)=>{
		res.send(history);
	})
})

app.listen(3000,()=>{
	console.log('on air');
})