const router = require('express').Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())

router.post('/mailer', (req, res) => {

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });
        
        var mailOptions = {
            from: process.env.EMAIL,
            to: 'mauriciogpauluk@gmail.com',
            subject: 'Nuevo pedido',
            text: req.body.text
        };
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
                res.send(200, info);
            }
        });
})

module.exports = router;