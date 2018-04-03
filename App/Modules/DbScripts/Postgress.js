"use strict";

(async function(){
    const pg = require('pg');
    const connectionString ='postgres://postgres:test@localhost:5432/User';
    let client ;
    var DB={};
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
        const text = 'INSERT INTO public."Employee"(name, "Password") VALUES($1, $2) RETURNING *'
        const values = [Object1.username,Object1.password];
        // console.log(values);
        const  query =await client.query(text, values);
        const query1=await client.query('Select * from public."Employee"') ;
    //    console.log(query1.rows);
        return query1.rows;
        DB.destroy();

    }

    // const text = 'INSERT INTO public."Employee"("Emp", "name") VALUES($1, $2) RETURNING *'
    // const values = [29,'test']

// const connectionString ='postgres://yswcedfh:25GoFvra5ZiytOJswH7bPjVlExuSs35s@horton.elephantsql.com:5432/yswcedfh';

module.exports=DB;
 })();
 