var servicio = require('../services/navegacion.service');

// Controlador para el módulo de Navegación
// Permite la lectura de información relacionada con Ruinas, Areas y Recorridos
// Incluye los elementos que los componene: Contenidos, Refuerzos y Evaluaciones
var controller = {};

// Servicio para obtener todas la ruinas registradas en BD
// callback - funcion a llamar cuando se ejecute la operación
controller.ruinas = function (callback){
    servicio.ruinas(function(err, ruinas){

        callback(err, ruinas);
    });   
}

// Servicio para obtener todas las áreas de una ruina específica
// idRuina - identificador único de la ruina a consultar
// callback - funcion a llamar cuando se ejecute la operación
controller.areas = function (idRuina, callback){
    servicio.areas(idRuina, function(err, areas){
        callback(err, areas);
    });   
}

// Servicio para obtener un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
controller.area = function (idArea, callback){
    servicio.area(idArea, function(err, area){
        callback(err, area);
    });   
}

// Servicio para obtener el recorrido de un área específica
// idArea - identificador único del área a consultar
// callback - funcion a llamar cuando se ejecute la operación
controller.recorrido = function (idArea, callback){
    servicio.recorrido(idArea, function(err, recorrido){
        callback(err, recorrido);
    });   
}

controller.nodo = function (idContenido, callback){
    servicio.nodo(idContenido, function(err, contenido){
        callback(err, contenido);
    });   
}

module.exports = controller;