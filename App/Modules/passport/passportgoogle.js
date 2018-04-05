"use strict";
(async function(){
    
var passport=require ("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Auth=require('../DbScripts/Loginscript');
var Register=require('../DbScripts/Registration');
var googleconfig=require('../Config/google')
console.log(JSON.stringify(googleconfig));
passport.use(new GoogleStrategy(googleconfig,function(accessToken, refreshToken, profile, done){
console.log(JSON.stringify(profile));
var data={};
data.Username=profile.displayName;
data.id=profile.id;
data.Logintype="google";
data.password='';
data.Confirmpassword='';
data.ImageURL=profile.photos[0].value;
Auth.Auth(data).then((user,err)=>{
    // console.log("At passport"+JSON.stringify(user));
    if (err) { return cb(err); }

      if ((user===undefined)||(user===null)) { console.log("Not user");
      Register.register(data).then((user)=>{console.log('new User created '+JSON.stringify(user))})
      
    }
    // console.log(JSON.stringify(user));
      return done(null, user);
  });
}));

passport.serializeUser(function(user, cb) {
    console.log("At Serialization Serializing in session");
var data={ID:user.Id,
    Username:user.Username}
    cb(null, data);
  });
  
  passport.deserializeUser(function(user, cb) {
     console.log("At DESerialization"+JSON.stringify(user));
    Auth.Authentication(user).then((user,err)=>{
      console.log('deserializing user details from Session' + JSON.stringify(user))
      if (err) { return cb(err); }
      cb(null, user);
    });
  })

})();