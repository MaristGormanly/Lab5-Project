const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views' })
})

app.get('/page1', function (req,res) {
    res.sendFile('page1.html', {root:'./client/views' })
})

app.get('/thread', function (req, res) {
    res.sendFile('thread.html', {root: './client/views' })
})

app.get('/thread2', function (req, res) {
    res.sendFile('thread2.html', {root: './client/views' })
})

app.post('/page1.html', async (rec,res) => {
    res.header('Content-Type', 'text/html; charset-utf-8');
        res.redirect(303, '/page1');

})

app.post('/thread.html', async (rec,res) => {
    res.header('Content-Type', 'text/html; charset-utf-8');
        res.redirect(303, '/thread');

})

app.post('/thread2.html', async (rec,res) => {
    res.header('Content-Type', 'text/html; charset-utf-8');
        res.redirect(303, '/thread2');

})

    function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
app.use(express.static('client/public'));


// Include the userRoutes module and api routing
let userRoutes = require('./route/userRoutes');
app.use('/api/user', userRoutes);

let userController = require('./controller/userController');

let User = require('./model/user');


let GiffRoutes = require('./route/GiffRoutes');
app.use('/api/giff', GiffRoutes);

app.listen(1337, () => console.log('Listening on port1337!'));


