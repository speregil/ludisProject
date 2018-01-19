var servicio = require('../services/navegacion.service');

var controller = {};

controller.test = test;

module.exports = controller;

function test(){
    return servicio.test();
}