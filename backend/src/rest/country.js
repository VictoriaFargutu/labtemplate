var express = require('express');
var router = express.Router();
var country = require('../service/country');

 router.get('/', country.list);
 router.get('/find/:id', country.findById);
 router.post('/create', country.create);
 router.post('/update/:id', country.update);
 router.get('/delete/:id',country.delete)

module.exports = router;