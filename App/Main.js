"use strict";
exports.__esModule = true;
var express_1 = require("express");
var process_1 = require("process");
var app = express_1(); // Creating express object
var router = express_1.Router(); //Initialising express router
// app.use(express.static(__dirname + '/public'));//Making public folder visible in browser tree
// app.use(Helmet());
router.get('/', function (req, res) {
    res.send("Worked"); //as a reponse sendding index.html to client browser
});
// console.log(process)
app.use('/', router);
app.listen(process_1.env.PORT || 3001);
