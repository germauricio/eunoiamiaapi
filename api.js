const router = require('express').Router();

const apiProductsRouter = require('./api/productsRouter');

router.get('/products', apiProductsRouter);
router.get('/product', apiProductsRouter);
router.put('/product', apiProductsRouter);
router.delete('/product', apiProductsRouter);
router.post('/product', apiProductsRouter);

module.exports = router;