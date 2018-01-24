// Representa el schema en mongoose de un área
// Un area representa un conjunto temático de contenidos
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var area = Schema({
    _id : Schema.ObjectId,
    nombre : String,
    descripcion : String,
    descripcionAlt : String,
    areaPrev : { type : Array , "default" : [] },
    areaSig : { type : Array , "default" : [] },
    ruina : String
});

area.methods.setNombre = function(nombre){
    this.nombre = nombre;
}

area.methods.setDescripcion = function(descripcion){
    this.descripcion = descripcion;
}

area.methods.setDescripcionAlt = function(descripcionAlt){
    this.descripcionAlt = descripcionAlt;
}

area.methods.setRuina = function(ruina){
    this.ruina = ruina;
}

module.exports = mongoose.model('Area', area);