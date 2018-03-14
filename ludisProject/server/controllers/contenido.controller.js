var servicio = require('../services/contenido.service');

var controller = {};

controller.crearRuina = function(req, callback){
    servicio.crearRuina(req.body.nombre, req.body.alt, function(err, ruina){
        callback(err, ruina);
    });
}

controller.crearArea = function(req, callback){
    servicio.crearArea(req.body.nombre, req.body.desc, req.body.alt, req.body.idRuina, function(err, area){
        callback(err, area);
    });
}

controller.asignarSiguiente = function(req, callback){
    servicio.asignarSiguiente(req.body.idActual, req.body.idSiguiente, function(err, areaSiguiente, areaActual){
        callback(err, areaSiguiente, areaActual);
    })
}

module.exports = controller;