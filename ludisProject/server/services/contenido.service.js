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

servicio.asignarSiguiente = function(idActual, idSiguiente, callback){
    var db = conexion.conectar();
    Area.update({_id: idActual}, {"#push" : {"areaSig" : idSiguiente}}, function(err, areaActual){
        if(err)
            callback(err, null, null);
        
        Area.update({_id: idSiguiente}, {"#push" : {"areaPrev" : idActual}}, function(err, areaSig){
            conexion.desconectar();
            callback(err, areaSig, areaActual);
        });
    });
}

module.exports = servicio;