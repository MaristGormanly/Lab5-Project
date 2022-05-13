console.log("[userService] initialized");

const { client } = require('pg');
const { Pool } = require('pg/lib');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Youssef12',
    port: 5432,
})

// connects the database to the server
exports.connect = function(){
    client.connect();
}

// creates the table
createTable("users", "id SERIAL PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255)");

function createTable(name,params) {
    const query = {
        text: 'CREATE TABLE IF NOT EXISTS' + name + "(" + params + ");"
    }
    makeQuery(query);
}

// adds a user 
exports.addUser = async function(username, email,password){
    const query = {
        text: 'INSERT INTO users(username, email, password) VALUES($1,$2,$3)',
        values:[username,email,password],
    }
    let query = "INSERT INTO users(username, email, password) VALUES( '" + username + "', '" + email + "', '" + password + "');";
    await makeQuery(query);

}

//removes a user 
exports.removeUser = async function(username , email, password) {
    const query = {
        text: 'DELETE FROM "users" WHERE username = password = ' + password,
    }
    await makeQuery(query);
    
}

// grabs a specific user 
exports.getAllUsers = async function(){
    const query = {
        text: 'SELECT * FROM "users"', 
    }
    var response;
    try{
        response = await client.query(query)
        return (response.rows);
    } catch(err){

    }
}

//controls responses and promises
async function makeQuery(query){
    var response;
    try{
        console.log(query);
        response = await client.query(query);
        console.log(response);
        return response.rows[0];
    }catch(err){
        console.log(err);
    }
  
    query(query)
    .then(res => res.rows[0]).catch(e => console.error(e.stack));
}