import express from 'express';
import session from 'express-sessions';
import path from 'path'// requiring  node path module to access local path
import process from 'process'
let app=express();// Creating express object
let router:any = express.Router();//Initialising express router
// app.use(express.static(__dirname + '/public'));//Making public folder visible in browser tree
 // app.use(Helmet());
 router.get('/',function(req,res){
    
    res.send("Worked");//as a reponse sendding index.html to client browser


});
// console.log(process)
app.use('/',router);
app.listen(process.env.PORT || 3001);
