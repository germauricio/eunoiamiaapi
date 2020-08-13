const router = require('express').Router();
var cors = require('cors');
const { Product } = require('../services/db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())

router.get('/products', async (req, res) => {
    const products = await Product.findAll();  
    res.json(products);
});

router.get('/product', async (req, res) => {
    const products = await Product.findOne({
        where: {
            name: req.params.name
        }
    });
    res.json(products);
});

router.post('/product', async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

router.put('/product', async (req, res) => {
    const product = await Product.update({ stock: req.body.stock }, {
        where: {
          name: req.body.name
        }
      });
    res.json(product);
})

router.delete('/product', async (req,res) => {
    const product = await Product.destroy({
        where: {
          name: req.body.name
        }
      }); 
    res.json(product);
});

module.exports = router;