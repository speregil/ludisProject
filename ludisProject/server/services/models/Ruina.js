var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nombre : String,
    alt : String
  });

schema.methods.setNombre = function(nombre){
    this.nombre = nombre;
}

schema.methods.setAlt = function(alt){
    this.alt = alt;
}

var ruina = mongoose.model('Ruina', schema);

module.exports = ruina;