const express = require('express');
const path = require("path");

var app = express();
var port = 8000;

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"./public")));

app.get('/', (req,res) =>{
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/content', (req,res) => {
    res.render('content');
});

app.listen(port, () => {
    console.log('server running successfully on${port}');
});