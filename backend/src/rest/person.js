var express = require('express');
var router = express.Router();
var person = require('../service/person');

 router.get('/', person.list);
 router.get('/find/:id', person.findById);
 router.post('/create', person.create);
 router.post('/update/:id', person.update);
 router.get('/delete/:id',person.delete);
 router.post('/createPerson',person.createPerson);
 

module.exports = router;