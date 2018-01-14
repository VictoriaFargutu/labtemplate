var express = require('express');
var router = express.Router();
var image = require('../service/image');

 router.get('/', image.list);
 router.get('/find/:id', image.findById);
 router.post('/create', image.create);
 router.post('/update/:id', image.update);
 router.get('/delete/:id',image.delete)

module.exports = router;