// Representa el schema en mongoose de una Evaluación
// Una evaluación representa un conjunto de refuerzos organizados
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var evaluacion = Schema({
    _id : Schema.ObjectId,
    nombre : String,
    descripcion : String,
    componentes : { type : Array , "default" : [] },
    filtros : { type : Array , "default" : [] }
});

evaluacion.methods.setNombre = function(nombre){
    this.nombre = nombre;
}

evaluacion.methods.setDescripcion = function(descripcion){
    this.descripcion = descripcion;
}

module.exports = mongoose.model('Evaluacion', evaluacion);