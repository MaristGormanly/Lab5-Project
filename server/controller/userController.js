const { createUser } = require("../model/user");
console.log("[userController] initialized");

let user = require('../model/user');

exports.getAllUsers = async (req,res) => {
    var users = await
    userServices.getAllUsers();
    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.index]);
}


//creates an array to hold the created users
let users = [];

let brian = user.createUser("Brian", "Gormanly", "bgormanly@12.gmail.com");
let youssef = user.createUser("Youssef", "Hady", "Yhady905@gmail.com");
let tim = user.createUser("Tim", "Lee", "timlee19@gmail.com");
let abe = user.createUser("Abe", "Bennett","shubbawubba34@gmail.com");

users.push(brian);
users.push(youssef);
users.push(tim);
users.push(abe);

// send entire users array as the body of the response as json
exports.getAllUsers = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(users);
}
//retrieve the user in the index parameter of the request and return as json
exports.getUser = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(users[req.params.index]);
}

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = User.createUser(req.body.firstName, req.body.lastName, req.body.email );
    users.push(newUser);
    res.setHeader( 'Content-Type', 'application/json' );
    res.send(users);
}
//delete a user
exports.deleteUser = function ( req, res ) {
    users.splice(req.params.index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}

//updates a user's First, last name, and their email
exports.changeUserInformation = function (req, res) {
    var updateUser = users[req.params.index];
    // check to see what has been passed and updating the local copy
    console.log(req.body.firstName);
    if(req.body.firstName) updateUser.firstName = req.body.firstName;
    if(req.body.lastName) updateUser.lastName = req.body.lastName;
    if(req.body.email) updateUser.email = req.body.email;
    // save the local copy of the info back into the array
    users[req.params.index] = updateUser;
    res.send(users[req.params.index]);
}

// updates a user entirely
exports.updateUser = function (req, res) {
    // get the existing user from the array
    var updateUser = users[req.params.index];
    // check to see what has been passed and update the local copy
    console.log(req.body.firstName);
    if(req.body){
        updateUser = req.body;
    }
    // save a local copy back in the array
    users[req.params.index] = updateUser;
    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.index]);
}