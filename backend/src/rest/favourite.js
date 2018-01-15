var express = require('express');
var router = express.Router();
var favourite = require('../service/favourite');

 router.get('/', favourite.list);
 router.get('/find/:id', favourite.findById);
 router.post('/create', favourite.create);
 router.post('/update/:id', favourite.update);
 router.delete('/delete/:id',favourite.delete)

module.exports = router;