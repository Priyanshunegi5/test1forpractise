const express = require('express');
const app = express();

app.use('/', function (req, res) {
    res.send("hey....!")


})

app.listen(4000);