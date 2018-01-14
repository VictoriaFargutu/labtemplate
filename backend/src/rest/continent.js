var express = require('express');
var router = express.Router();
var continent = require('../service/continent');

router.get('/', continent.list);
router.get('/find/:id', continent.findById);
router.post('/create', continent.create);
router.post('/update/:id', continent.update);
router.get('/delete/:id',continent.delete)

module.exports = router;