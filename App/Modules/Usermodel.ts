import mongoose from 'mongoose';
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
 author: ObjectId,
 title: String,
 body: String,
 date: Date
});

export {UserSchema};
