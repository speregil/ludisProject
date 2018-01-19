var mongoose = require('mongoose');

var Ruina = require('./models/Ruina');

var service = {};
service.test = test;

module.exports = service;

function connect(){
    mongoose.connect('mongodb://localhost/ludisDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexion:'));

    db.once('open', function() {
         console.log("Conexion exitosa a Base de Datos");
    });

    return db;
}

function test(){
    var db = connect();
    var testData = new Ruina({nombre: 'La Biblioteca de Birma', 
                                alt: 'Fundamentos de Matemáticas' });
    testData.save(function (err, data){
        if(err) return console.error(err);
        mongoose.disconnect();
    });
    return {resp: 'insercion exitosa'};
}

