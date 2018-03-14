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
        res.json({status : 0, data : ruina});
    });
});

router.post('/area', function(req, res, next) {
    controller.crearArea(req, function(err, area){
        if(err){
           res.status(500);
           res.json({status : 1, err : 'Error de creación: ' + err}); 
        }
        res.json({status : 0, data : area});
    });
});

router.post('/asignar', function(req, res, next){
    controller.asignarSiguiente(req, function(err, areaSiguiente, areaActual){
        if(err){
            res.status(500);
            res.json({status : 1, err : 'Error de actualizacion: ' + err}); 
         }
         res.json({status: 0, sig: areaSiguiente, actual: areaActual});
    });
});

module.exports = router;