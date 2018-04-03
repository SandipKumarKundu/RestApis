"use strict";
(async function(){
var express = require("express");
var Postgres=require("./Modules/DbScripts/Postgress")
var session = require("express-session");
var RegistrationScript=require('./Modules/DbScripts/Registration');
var passportConfig=require('./Modules/passport')
var passport=require ("passport");
var process_1 = require("process");
var path=require('path');
var app = express(); // Creating express object
var router = express.Router(); //Initialising express router
var bodyParser = require('body-parser');
app.use('/Frontend',express.static(path.join(__dirname,'../','Frontend')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));
app.use(passport.initialize()); 
  app.use(passport.session());
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../','Frontend','Index.html')); //as a reponse sendding index.html to client browser
});
router.get('/register',(req, res)=>{
  console.log("at registration")
  res.sendFile(path.join(__dirname,'../','Frontend','Registration.html'));
})
app.post('/login',passport.authenticate('local', { failureRedirect: '/register' }),
function(req, res) {
  res.redirect('/');
});

app.post('/registration',(req, res)=>{
  RegistrationScript.register(req.body).then((user)=>{  res.json(user)});

})
app.use('/', router);
app.listen(process_1.env.PORT || 3001);
})();
