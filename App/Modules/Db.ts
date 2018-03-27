import mongoose from 'mongoose';
import {UserModel} from './Usermodel';
let url:string='mongodb://Sandip:Password@ds161136.mlab.com:61136/testauth';
mongoose.connect(url);
let SaveUser=UserModel({ 'title': 'First Data',
    'body': 'Nothing',
    'date': Date.now()});
    let User =new UserModel();
User.find((err, people) => {  
    // Note that this error doesn't mean nothing was found,
    // it means the database had an error while searching, hence the 500 status
    if (err) throw err
    // send the list of all people
    SaveUser.save((err,data)=>{
        if(err) throw err;
        console.log(data);
    })
})