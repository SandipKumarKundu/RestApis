"use strict";

(async function(){
    const pg = require('pg');
    const connectionString ='postgres://postgres:test@localhost:5432/User';
    let client ;
    var DB={};
    DB.init=async ()=>{
        // console.log("at Init");
   client = new pg.Client(connectionString);
   client.connect();
    }

   DB.destroy=async ()=>{
        await client.end();
    }

    DB.register=async (data)=>{
        DB.init();
        var Object1=data;
        console.log('at registration script Validating Users details In DB ');
        // console.log(Object1.name);
        //var string ='INSERT INTO public."Employee"("Emp") VALUES'+'('+Object1.Emp+')'
        // const text = 'INSERT INTO public."Employee"("Emp") VALUES'+'('+Object1.Emp+','+Object1.password+')';
        const text = 'INSERT INTO public."Employee" (name, "Password") VALUES($1, $2) RETURNING *'
        const values = [Object1.username,Object1.password]
        // console.log('at Login script \n'+text);
        // console.log(values);
        try{
        const  query =await client.query(text, values);
//  console.log(query.rows);
        return query.rows[0];
        
        DB.destroy();
        }catch(err)
        {
            return err;
        }
    }
    DB.Authentication=async (data)=>{
        DB.init();
        // var Object1=data;
   console.log('at Authentication script checking User details for auth');
        // console.log(Object1.name);
        //var string ='INSERT INTO public."Employee"("Emp") VALUES'+'('+Object1.Emp+')'
        const text = 'Select * from  public."Employee" where name= ($1)';
        
        const values = [data];
        // console.log('at Login script \n'+text);
        // console.log(values);
        try{
        const  query =await client.query(text, values);
//  console.log(query.rows);
        return query.rows[0];
        
        DB.destroy();
        }catch(err)
        {
            return err;
        }
    }

    // const text = 'INSERT INTO public."Employee"("Emp", "name") VALUES($1, $2) RETURNING *'
    // const values = [29,'test']

// const connectionString ='postgres://yswcedfh:25GoFvra5ZiytOJswH7bPjVlExuSs35s@horton.elephantsql.com:5432/yswcedfh';

module.exports=DB;
 })();
 