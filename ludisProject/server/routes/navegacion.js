// Rutas asociadas al API del modulo de navegación
var express = require('express');

var controller = require('../controllers/navegacion.controller');
var router = express.Router();


router.get('/ruinas', function(req, res, next) {
    controller.ruinas(function(err, ruinas){
        if(err){
           res.status(500);
           res.send('Error de consulta: ' + err); 
        }

        res.send(ruinas);
    });
});

module.exports = router;