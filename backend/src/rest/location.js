var express = require('express');
var router = express.Router();
var location = require('../service/location');

 router.get('/', location.list);
 router.get('/find/:id', location.findById);
 router.post('/create', location.create);
 router.post('/update/:id', location.update);
 router.delete('/delete/:id',location.delete)

module.exports = router;