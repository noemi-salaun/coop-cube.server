/**
 * Created by Noémi Salaün on 23/10/2016.
 */

import * as express from "express";

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3010, function () {
    console.log('Example app listening on port 3010!');
});