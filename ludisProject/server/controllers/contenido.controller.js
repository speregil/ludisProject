var servicio = require('../services/contenido.service');

var controller = {};

controller.crearRuina = function(req, callback){
    servicio.crearRuina(req.body.nombre, req.body.alt, function(err, ruina){
        callback(err, ruina);
    });
}

controller.editarRuina = function(req, callback){
    servicio.editarRuina(req.body.id, req.body.nombre, req.body.alt, function(err, num){
        callback(err, num);
    });
}

controller.crearArea = function(req, callback){
    servicio.crearArea(req.body.nombre, req.body.desc, req.body.alt, req.body.idRuina, function(err, area){
        callback(err, area);
    });
}

controller.editarArea = function(req, callback){
    servicio.editarArea(req.body.id, req.body.nombre, req.body.desc, req.body.alt, function(err, num){
        callback(err, num);
    });
}

controller.asignarSiguiente = function(req, callback){
    servicio.asignarSiguiente(req.body.idActual, req.body.idSiguiente, function(err, numActual, idActual, idSiguiente){
        if(numActual.nModified > 0){
            servicio.asignarPrevio(idActual, idSiguiente, function(err, numSiguiente, idActual, idSiguiente){
                callback(err, numSiguiente.nModified);
            });
        }
        else
            callback(err, numActual.nModified);
    })
}

controller.removerSiguiente = function(req, callback){
    servicio.removerSiguiente(req.body.idActual, req.body.idSiguiente, function(err, numActual, idActual, idSiguiente){
        if(numActual.nModified > 0){
            servicio.removerPrevio(idActual, idSiguiente, function(err, numSiguiente, idActual, idSiguiente){
                console.log("Previo ejecutado");
                callback(err, numSiguiente.nModified);
            });
        }
        else
            callback(err, numActual.nModified);
    })
}

module.exports = controller;