var mongoose = require('mongoose');
var conexion = require('./conexion.service');
var Ruina = require('./models/Ruina');
var Area = require('./models/Area');
var Nodo = require('./models/Nodo');
var Contenido = require('./models/Contenido');

// Servicio de acceso a las diferentes entidades de navegacion de contenido
// Permite la lectura de información relacionada con Ruinas, Areas y Recorridos
// Incluye los elementos que los componene: Contenidos, Refuerzos y Evaluaciones
// Implementación en base a MongoDB y Mongoose
var servicio = {};

// Servicio para obtener todas la ruinas registradas en BD
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Ruina.js
servicio.ruinas = function (callback){
    var db = conexion.conectar();
    Ruina.find(function (err, ruinas){
        callback(err, ruinas);
        conexion.desconectar();
    });
}

// Servicio para obtener todas las áreas de una ruina específica
// idRuina - identificador único de la ruina a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Area.js
servicio.areas = function (idRuina, callback){
    var db = conexion.conectar();
    Area.find({ruina : idRuina}, function(err, areas){
        callback(err, areas);
        conexion.desconectar();
    });
}

// Servicio para obtener un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un json con el esquema definido en Area.js
servicio.area = function (idArea, callback){
    var db = conexion.conectar();
    Area.find({_id : idArea}, function(err, area){
        callback(err, area[0]);
        conexion.desconectar();
    });
}

// Servicio para obtener el recorrido de un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Nodo.js
servicio.recorrido = function (idArea, callback){
    var db = conexion.conectar();
    Nodo.find({area : idArea}, function(err, recorrido){
        callback(err, recorrido);
        conexion.desconectar();
    });
}

servicio.nodo = function(idContenido, callback){
    var db = conexion.conectar();
    Contenido.find({_id: idContenido}, function(err, contenido){
        callback(err, contenido[0]);
        conexion.desconectar();
    });
}

module.exports = servicio;

