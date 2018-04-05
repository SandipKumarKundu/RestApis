
"use strict";
(async function(){
    
var passport=require ("passport");
var LocalStrategy = require('passport-local').Strategy;
var Auth=require('../DbScripts/Loginscript');

passport.use(new LocalStrategy({
  passReqToCallback: true,
  session: false
},
function(req, username, password, done) {
  var data=req.body;
  console.log("At Passpor Startegy Callig Login dcript for user details");
  Auth.Auth(data).then((user,err)=>{
    // console.log("At passport"+JSON.stringify(user));
    if (err) { return cb(err); }

      if ((user===undefined)||(user===null)) { console.log("Not user");

      return done(null, false); 
    }
    if (user.Password!==data.password) {console.log(data.password,user.Password+"Not password"); 
    return done(null, false); 
  }
      

      return done(null, user);
  });
  passport.serializeUser(function(user, cb) {
    console.log("At Serialization Serializing user.name in session");
    cb(null, user.name);
  });
  
  passport.deserializeUser(function(user, cb) {
    // console.log("At DESerialization"+JSON.stringify(user));
    Auth.Authentication(user).then((user,err)=>{
      console.log('deserializing user details from Session' + JSON.stringify(user))
      if (err) { return cb(err); }
      cb(null, user);
    });
  })
  // request object is now first argument
  // ...
}
));

})()

