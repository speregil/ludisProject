var mongoose = require('mongoose');

var servicio = {};

// Conecta a una base MongoDB haciendo uso de Mongoose
servicio.conectar = function(){
    mongoose.connect('mongodb://localhost/ludisDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexion:'));

    db.once('open', function() {
         console.log("Conexion exitosa a Base de Datos");
    });

    return db;
}

// Elimina la conexión actual de mongoose
servicio.desconectar = function(){
    mongoose.disconnect();
}

module.exports = servicio;