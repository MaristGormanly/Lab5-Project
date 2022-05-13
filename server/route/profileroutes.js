// output to the log that the module is loaded successfully!
console.log("[profileroutes] initialized");



// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// all users routes
router.route('/')
    .get((req, res) => {
        res.sendFile('thread2.html', {root:'./client/views'})
    })
   

// user by array index route
router.route('/:index')
    .get((req, res) => {
        res.sendFile('thread2.html', {root:'./client/views'})
    })

   
module.exports = router;