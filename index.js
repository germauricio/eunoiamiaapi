const express = require('express');
const apiRouter = require('./api');
const app = express();
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

require('./services/db');

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000)
