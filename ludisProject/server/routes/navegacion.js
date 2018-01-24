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

router.get('/areas/:idRuina', function(req, res, next) {
    controller.areas(req.params.idRuina, function(err, areas){
        if(err){
           res.status(500);
           res.send('Error de consulta: ' + err); 
        }

        res.send(areas);
    });
});

router.get('/recorrido/:idArea', function(req, res, next) {
    controller.recorrido(req.params.idArea, function(err, recorrido){
        if(err){
           res.status(500);
           res.send('Error de consulta: ' + err); 
        }

        res.send(recorrido);
    });
});

module.exports = router;