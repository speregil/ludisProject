var servicio = require('../services/contenido.service');

var controller = {};

controller.crearRuina = function(req, callback){
    servicio.crearRuina(req.body.nombre, req.body.alt, function(err, ruina){
        callback(err, ruina);
    });
}

module.exports = controller;