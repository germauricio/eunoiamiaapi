const express = require('express');
const apiRouter = require('./api');
const app = express();
const cors = require('cors');

app.use(cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

require('./services/db');

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000)
