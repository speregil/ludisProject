var mongoose = require('mongoose');
var conexion = require('./conexion.service');
var Ruina = require('./models/Ruina');
var Area = require('./models/Area');

var servicio = {};

servicio.crearRuina = function(nombre, alt, callback){
    var db = conexion.conectar();
    var ruina = new Ruina();
    ruina._id = new mongoose.mongo.ObjectId();
    ruina.nombre = nombre;
    ruina.alt = alt;

    ruina.save(function(err, ruina, ver){
        conexion.desconectar();
        callback(err, ruina);
    });
}

servicio.editarRuina = function(id, nNombre, nAlt, callback){
    var db = conexion.conectar();
    Ruina.update({_id: id}, {$set: {nombre: nNombre, alt: nAlt}}, function(err, num){
        conexion.desconectar();
        callback(err, num);
    });
}

servicio.crearArea = function(nombre, desc, alt, idRuina, callback){
    var db = conexion.conectar();
    var area = new Area();
    area._id = new mongoose.mongo.ObjectId();
    area.nombre = nombre;
    area.descripcion = desc;
    area.descripcionAlt = alt;
    area.ruina = idRuina;

    area.save(function(err, area, ver){
        conexion.desconectar();
        callback(err, area);
    });
}

servicio.editarArea = function(id, nNombre, nDesc, nAlt, callback){
    var db = conexion.conectar();
    Area.update({_id: id}, {$set: {nombre: nNombre, descripcion: nDesc, descripcionAlt: nAlt}}, function(err, num){
        conexion.desconectar();
        callback(err, num);
    });
}

servicio.asignarSiguiente = function(idActual, idSiguiente, callback){
    var db = conexion.conectar();
    Area.update({_id: idActual}, {"$addToSet" : {"areaSig" : idSiguiente}}, function(err, numActual){
        conexion.desconectar();
        callback(err, numActual, idActual, idSiguiente);
    });
}

servicio.asignarPrevio = function(idActual, idSiguiente, callback){
    var db = conexion.conectar();
    Area.update({_id: idSiguiente}, {"$addToSet" : {"areaPrev" : idActual}}, function(err, numSig){
        conexion.desconectar();
        callback(err, numSig, idActual, idSiguiente);
    });
}

servicio.removerSiguiente = function(idActual, idSiguiente, callback){
    var db = conexion.conectar();
    Area.update({_id: idActual}, {"$pull" : {"areaSig" : idSiguiente}}, function(err, numActual){
        conexion.desconectar();
        callback(err, numActual, idActual, idSiguiente);
    });
}

servicio.removerPrevio = function(idActual, idSiguiente, callback){
    var db = conexion.conectar();
    Area.update({_id: idSiguiente}, {"$pull" : {"areaPrev" : idActual}}, function(err, numSig){
        conexion.desconectar();
        callback(err, numSig, idActual, idSiguiente);
    });
}

module.exports = servicio;