const router = require('express').Router();
var cors = require('cors');
const { User } = require('../services/db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cors())

router.post('/admin/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(user => {
        if (user) {
            res.status(200);
            res.send({
                'message': 'logged in'
              });
        }
        else {
            res.status(404);
            res.send({
              'message': 'invalidad credentials'
            });
        }
    });
});

module.exports = router;