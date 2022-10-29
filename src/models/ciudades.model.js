const {Schema, model } = require('mongoose')

const  CiudadesSchema = new Schema({
        idciu: {type: Number , required: [true, "Se requiere un codigo de provincia"]},
        nombreprovincia: {type: String},
        idciudad: {type: Number},
        nombreciudad: {type: String},
        fechafundacion: {type: Date, default: Date.now}
})

const CiudadesModel = model("Ciudades", CiudadesSchema);
module.exports = CiudadesModel;