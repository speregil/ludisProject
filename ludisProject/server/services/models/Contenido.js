// Representa el schema en mongoose de un Contenido
// Un contenido representa un recurso para el estudiante
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contenido = Schema({
    _id : Schema.ObjectId,
    nombre : String,
    descripcion : String,
    tipo : String,
    recurso : String,
    filtros : { type : Array , "default" : [] }
});

contenido.methods.setNombre = function(nombre){
    this.nombre = nombre;
}

contenido.methods.setDescripcion = function(descripcion){
    this.descripcion = descripcion;
}

contenido.methods.setTipo = function(tipo){
    this.tipo = tipo;
}

contenido.methods.setRecurso = function(recurso){
    this.recurso = recurso;
}

module.exports = mongoose.model('Contenido', contenido);