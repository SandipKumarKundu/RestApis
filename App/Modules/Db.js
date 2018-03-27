"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = require("./Usermodel");

var url = 'mongodb://test:1234@ds161136.mlab.com:61136/testauth';
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Usermodel=mongoose.model('Usermodel',UserSchema);
var SaveUser =new Usermodel({ title: 'First Data',
    body: 'Nothing',
    date: Date.now() });

    Usermodel.find({},function (err, people) {
    // Note that this error doesn't mean nothing was found,
    // it means the database had an error while searching, hence the 500 status
    if (err)
        throw err;
    // send the list of all people
    SaveUser.save(function (err, data) {
        if (err)
            throw err;
        console.log(data);
    });
});
