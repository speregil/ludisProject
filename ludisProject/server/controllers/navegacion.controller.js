var servicio = require('../services/navegacion.service');

var controller = {};

controller.test = test;


module.exports = controller;

controller.ruinas = function (callback){
    servicio.ruinas(function(err, ruinas){
        callback(err, ruinas);
    });   
}