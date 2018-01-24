// Define el schema en Mongoose de una Ruina
// La ruina representa un curso o organización general de temas comunes
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ruina = Schema({
    _id : Schema.ObjectId,
    nombre : String,
    alt : String
});

ruina.methods.setNombre = function(nombre){
    this.nombre = nombre;
}

ruina.methods.setAlt = function(alt){
    this.alt = alt;
}

module.exports = mongoose.model('Ruina', ruina);