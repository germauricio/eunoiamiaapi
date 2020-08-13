const router = require('express').Router();

const apiProductsRouter = require('./api/productsRouter');

router.use(function(req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');

    next();
 });

router.get('/products', apiProductsRouter);
router.get('/product', apiProductsRouter);
router.put('/product', apiProductsRouter);
router.delete('/product', apiProductsRouter);
router.post('/product', apiProductsRouter);

module.exports = router;