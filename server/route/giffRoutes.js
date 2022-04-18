// output to the log that the module is loaded successfully!
console.log("[giffRoutes] initialized");

let giffController = require('../controller/giffController');

// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// all users routes
router.route('/')
    .get( ( req, res ) => {
        giffController.getAllgiffs( req, res );
    })
    .post( ( req, res ) => {
        giffController.savegiffs( req, res );
    });


// user by array index route
router.route('/')
    .get( ( req, res ) => {
        giffController.getgiffs( req, res );
    })
    .delete( ( req, res ) => {
        giffController.deletegiffs( req, res );
    })
    .patch( ( req, res ) => {
        giffController.Changegiffsinformation( req, res );
    })
    .put( ( req, res ) => {
        giffController.updategiffs( req, res );
    });

module.exports = router;