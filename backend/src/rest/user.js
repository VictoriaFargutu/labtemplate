var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:id', user.findById);
router.post('/', user.create);
router.get('/username_password/:username&:password', user.findByUsernameAndPassword);

module.exports = router;
