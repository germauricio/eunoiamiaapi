const router = require('express').Router();

const apiProductsRouter = require('./api/productsRouter');

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
 });

router.get('/products', apiProductsRouter);
router.get('/product/:name', apiProductsRouter);
router.get('/products/category/:category', apiProductsRouter);
router.put('/product', apiProductsRouter);
router.delete('/product', apiProductsRouter);
router.post('/product', apiProductsRouter);

module.exports = router;