"use strict";
var DB={};
(async function lon(){
    const pg = require('pg');
    const connectionString ='postgres://postgres:test@localhost:5432/User';
    let client ;
 
    DB.init=async ()=>{
        console.log("at Init");
   client = new pg.Client(connectionString);
   client.connect();
    }
   DB.destroy=async ()=>{
        await client.end();
    }

    DB.insert=async (data)=>{
        DB.init();
        var Object1=data;
        // console.log(Object1.name);
        //var string ='INSERT INTO public."Employee"("Emp") VALUES'+'('+Object1.Emp+')'
        const text = 'INSERT INTO public."Employee"("Emp", "name") VALUES($1, $2) RETURNING *'
        const values = [Object1.Emp,Object1.name];
        console.log(values);
        const  query =await client.query(text, values);

        console.log(query.rows);
        DB.destroy();

    }

    // const text = 'INSERT INTO public."Employee"("Emp", "name") VALUES($1, $2) RETURNING *'
    // const values = [29,'test']

// const connectionString ='postgres://yswcedfh:25GoFvra5ZiytOJswH7bPjVlExuSs35s@horton.elephantsql.com:5432/yswcedfh';




 

module.export=DB;
 })();
 DB.insert({Emp:24,name:'Snigs'});