var express = require('express');

var controller = require('../controllers/navegacion.controller');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.send(controller.test());
});

module.exports = router;