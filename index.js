const express = require('express');

const apiRouter = require('./api');
const app = express();

require('./services/db');

app.use('/api', apiRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(process.env.PORT || 5000)
