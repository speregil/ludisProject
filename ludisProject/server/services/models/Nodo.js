// Representa el schema en mongoose de un Nodo
// Un Nodo relaciona un contenido con un área, y es el elemento básico para reconstruir el recorrido de la misma
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var nodo = Schema({
    _id : Schema.ObjectId,
    tipo : String,
    area : String,
    contenido : String,
    siguientes : { type : Array , "default" : [] },
    previos : { type : Array , "default" : [] },
    ludis : Number,
    visto : Boolean,
    visible : Boolean
});

nodo.methods.setTipo = function(tipo){
    this.tipo = tipo;
}

nodo.methods.setArea = function(area){
    this.area = area;
}

nodo.methods.setContenido = function(contenido){
    this.contenido = contenido;
}

nodo.methods.setContenido = function(contenido){
    this.contenido = contenido;
}

nodo.methods.setLudis = function(ludis){
    this.ludis = ludis;
}

nodo.methods.setVisto = function(visto){
    this.visto = visto;
}

nodo.methods.setVisible = function(visible){
    this.visible = visible;
}

module.exports = mongoose.model('Nodo', nodo);