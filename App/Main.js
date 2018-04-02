"use strict";
(async function(){
var express = require("express");
var Postgres=require("./Modules/Postgress")

var process_1 = require("process");
var path=require('path');
var app = express(); // Creating express object
var router = express.Router(); //Initialising express router
var bodyParser = require('body-parser');
app.use('/Frontend',express.static(path.join(__dirname,'../','Frontend')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../','Frontend','Index.html')); //as a reponse sendding index.html to client browser
});
app.post('/login',async function (req, res) {
var data=await Postgres.insert(req.body);
// console.log("Data Returned"+data)
res.json(data);
});
app.use('/', router);
app.listen(process_1.env.PORT || 3001);
})();
