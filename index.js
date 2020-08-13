const express = require('express');
const apiRouter = require('./api');
const app = express();
const cors = require('cors');

app.use(cors());

require('./services/db');

app.use('/api', apiRouter);

app.listen(process.env.PORT || 5000)
