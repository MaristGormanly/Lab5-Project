const { creategiff } = require("../model/giff");
console.log("[giffController] initialized");

let giff = require('../model/giff');
let giffService = require('../service/giffService');

//creates an array to hold the created users
let giffs = [];

let George = giff.creategiff("George1233", "bgormanly@12.gmail.com", "egypt123" );
let youssefa = giff.creategiff("Youssefa123", "Yhady905@gmail.com", "hady123");
let timmyt = giff.creategiff("Timmyt33", "timlee19@gmail.com", "tleeee");
let abeeee3214 = giff.creategiff("AbeBennett","shubbawubba34@gmail.com", "shadow3214");

giffs.push(George);
giffs.push(youssefa);
giffs.push(timmyt);
giffs.push(abeeee3214);

// send entire users array as the body of the response as json
exports.getAllgiffs = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(giffs);
}
//retrieve the user in the index parameter of the request and return as json
exports.getgiff = ( req, res) => {
    res.setHeader('Content-Type' ,'application/json');
    res.send(giff[req.params.index]);
}

// save a user
exports.savegiff = ( req, res ) => {
    let newgiff = giff.creategiff( req.body.username, req.body.email, req.body.password);
    users.push( newgiff);
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( giff );
}
