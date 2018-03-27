"use strict";
// exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.Schema, ObjectId = Schema.ObjectId;
var UserSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});
module.export = UserSchema;
