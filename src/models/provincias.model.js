const {Schema, model } = require('mongoose')

const  ProvinciasSchema = new Schema({
        idprov: {type: String , required: true},
        nombre: {type: String},
        datecreacion: {type: Date, default: Date.now},
})

const ProvinciasModel = model("Provincia", ProvinciasSchema);

module.exports = ProvinciasModel;