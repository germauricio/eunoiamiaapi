const express = require('express');
const apiRouter = require('./api');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
require('dotenv').config();

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

require('./services/db');

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000)
