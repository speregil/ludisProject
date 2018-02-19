// Rutas asociadas al API del modulo de creación de contenido
var express = require('express');

var controller = require('../controllers/contenido.controller');
var router = express.Router();

router.post('/ruina', function(req, res, next) {
    controller.crearRuina(req, function(err, ruina){
        if(err){
           res.status(500);
           res.json({status : 1, err : 'Error de creación: ' + err}); 
        }
        res.json({status : 0, data : ruina})
    });
});

module.exports = router;