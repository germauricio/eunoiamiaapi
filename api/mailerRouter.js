const router = require('express').Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())

router.post('/mailer', (req, res) => {

        var transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });
        
        var mailOptions = {
            from: process.env.EMAIL,
            to: 'michidamario@gmail.com',
            subject: 'Nuevo pedido',
            text: req.body.text
        };
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.send(500, err.message);
            } else {
                res.send(200, info);
            }
        });
})

module.exports = router;