var mongoose = require('mongoose');
var conexion = require('./conexion.service');
var Ruina = require('./models/Ruina');

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

module.exports = servicio;