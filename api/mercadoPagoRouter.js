const router = require('express').Router();
var cors = require('cors');
const mercadopago = require('mercadopago');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())


router.post('/payments/mercado_preference', (req,  res) => {
    try {
      mercadopago.configure({
        access_token: process.env.MERCADOPAGO_CLIENT_ID
        });
        let preference = {
        items: [
            {
            title: req.body.name,
            unit_price: parseInt(req.body.price),
            quantity: 1,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(response => {
        res.send({preferenceId: response.body.init_point.split('pref_id=')[1]});
        })
        .catch(error => {
        console.log(error);
        res.status(403).send(error);
        });
    } catch (error) {
      console.log(error);
    }
});

module.exports = router;