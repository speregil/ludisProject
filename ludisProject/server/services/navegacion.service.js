var mongoose = require('mongoose');
var Ruina = require('./models/Ruina');
var Area = require('./models/Area');
var Nodo = require('./models/Nodo');

// Servicio de acceso a las diferentes entidades de navegacion de contenido
// Permite la lectura de información relacionada con Ruinas, Areas y Recorridos
// Incluye los elementos que los componene: Contenidos, Refuerzos y Evaluaciones
// Implementación en base a MongoDB y Mongoose
var service = {};

//Conecta a una base MongoDB haciendo uso de Mongoose
function connect(){
    mongoose.connect('mongodb://localhost/ludisDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexion:'));

    db.once('open', function() {
         console.log("Conexion exitosa a Base de Datos");
    });

    return db;
}

// Servicio para obtener todas la ruinas registradas en BD
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Ruina.js
service.ruinas = function (callback){
    var db = connect();
    Ruina.find(function (err, ruinas){
        callback(err, ruinas);
        mongoose.disconnect();
    });
}

// Servicio para obtener todas las áreas de una ruina específica
// idRuina - identificador único de la ruina a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Area.js
service.areas = function (idRuina, callback){
    var db = connect();
    Area.find({ruina : idRuina}, function(err, areas){
        callback(err, areas);
        mongoose.disconnect();
    });
}

// Servicio para obtener un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un json con el esquema definido en Area.js
service.area = function (idArea, callback){
    var db = connect();
    Area.find({_id : idArea}, function(err, area){
        callback(err, area);
        mongoose.disconnect();
    });
}

// Servicio para obtener el recorrido de un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
// retorna un arreglo de json con el esquema definido en Nodo.js
service.recorrido = function (idArea, callback){
    var db = connect();
    Nodo.find({area : idArea}, function(err, recorrido){
        callback(err, recorrido);
        mongoose.disconnect();
    });
}

module.exports = service;

