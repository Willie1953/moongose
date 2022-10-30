const {Schema, model } = require('mongoose')

const  MunicipiosSchema = new Schema({
        id: {type: Number , required: [true, "Se requiere un codigo de provincia"]},
        nombreprov: {type: String},
        idmuni: {type: Number},
        nombremuni: {type: String},
        fechafundacion: {type: Date, default: Date.now}
})

const MunicipiosModel = model("Municipios", MunicipiosSchema);
module.exports = MunicipiosModel;