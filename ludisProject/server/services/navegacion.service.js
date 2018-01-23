var mongoose = require('mongoose');

var Ruina = require('./models/Ruina');

var service = {};
service.test = test;

function connect(){
    mongoose.connect('mongodb://localhost/ludisDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexion:'));

    db.once('open', function() {
         console.log("Conexion exitosa a Base de Datos");
    });

    return db;
}

service.ruinas = function (callback){
    var db = connect();
    Ruina.find(function (err, ruinas){
        callback(err, ruinas);
    });
}

module.exports = service;

