const router = require('express').Router();

const apiProductsRouter = require('./api/productsRouter');
const mercadoPagoRouter = require('./api/mercadoPagoRouter');
const apiMailerRouter = require('./api/mailerRouter');
const apiUserRouter = require('./api/userRouter');
const apiSellsRouter = require('./api/sellsRouter');

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

router.post('/admin/sell', apiSellsRouter);
router.get('/admin/sells', apiSellsRouter);

router.post('/payments/mercado_preference', mercadoPagoRouter);

router.post('/mailer', apiMailerRouter);

router.post('/admin/login', apiUserRouter);

module.exports = router;