const {Schema, model } = require('mongoose')

const  ProvinciasSchema = new Schema({
        id: {type: String , required: true},
        nombre: {type: String},
        fechacreacion: {type: Date, default: Date.now},
})

const ProvinciasModel = model("Provincias", ProvinciasSchema);

module.exports = ProvinciasModel;