const express = require('express');
app = express();

app.use(function (req, res, next) {

    console.log("hellow i am a middle ware...!")
    next();

})

app.get("/", function (req, res) {

    res.send("heyyy i am a route ")







});

app.listen(3000);