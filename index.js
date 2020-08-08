const express = require('express');

const PORT = 8000;
const apiRouter = require('./api');
const app = express();

require('./services/db');

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
  });