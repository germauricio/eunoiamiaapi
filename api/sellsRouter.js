const router = require('express').Router();
var cors = require('cors');
const { Sell } = require('../services/db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())

router.get('/admin/sells', async (req, res) => {
    const sells = await Sell.findAll();  
    res.json(sells);
});

router.post('/admin/sell', async (req, res) => {
    const sell = await Sell.create(req.body);
    res.json(sell);
});

module.exports = router;