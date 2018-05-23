// Rutas asociadas al API del modulo de creación de contenido
var express = require('express');

var controller = require('../controllers/contenido.controller');
var router = express.Router();

router.post('/ruina', function(req, res, next) {
    controller.crearRuina(req, function(err, ruina){
        if(err){
           res.status(500);
           res.json({status : 1, error : 'Error de creación: ' + err, data : {}}); 
        }
        res.json({status : 0, error : '', data : ruina});
    });
});

router.post('/editarRuina', function(req, res, next) {
    controller.editarRuina(req, function(err, num){
        if(err){
           res.status(500);
           res.json({status: 1, mensaje: 'Error de actualizacion: ' + err}); 
        }
        res.json({status: 0, mensaje: "Ruina actualizada exitosamente"});
    });
});

router.post('/area', function(req, res, next) {
    controller.crearArea(req, function(err, area){
        if(err){
           res.status(500);
           res.json({status : 1, error : 'Error de creación: ' + err, data : {}}); 
        }
        res.json({status : 0, error : '', data : area});
    });
});

router.post('/editarArea', function(req, res, next) {
    controller.editarArea(req, function(err, num){
        if(err){
           res.status(500);
           res.json({status: 1, mensaje: 'Error de actualizacion: ' + err}); 
        }
        res.json({status: 0, mensaje: "Area actualizada exitosamente"});
    });
});

router.post('/asignar', function(req, res, next){
    controller.asignarSiguiente(req, function(err, stat){
        if(err){
            res.status(500);
            res.json({status : -1, err : 'Error de actualizacion: ' + err, data : {}}); 
         }
         
         res.json({status: stat});
    });
});

router.post('/remover', function(req, res, next){
    controller.removerSiguiente(req, function(err, stat){
        if(err){
            res.status(500);
            res.json({status : -1, err : 'Error de actualizacion: ' + err, data : {}}); 
         }   
         res.json({status: stat});
    });
});

module.exports = router;