const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './client/views' })
})

app.get('/page1', function (req,res) {
    res.sendFile('page1.html', {root:'./client/views' })
})

app.listen(1337, () => console.log('Marist Chatter listening on port1337!'));

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
app.use(express.static('client/public'));