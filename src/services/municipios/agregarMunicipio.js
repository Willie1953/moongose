const MunicipiosModel = require("../../models/municipios.models");
const axios = require("axios");

const agregarMunicipiosService = () => { 

/** se ha moquedo el get para seleccionar la provincia de Buenos Aires. Supuestamente desde el front se seleccionaria la provincia. Asimismo se ha limitado a 5 la cantidad de municipios devolver */

axios.get("https://apis.datos.gob.ar/georef/api/municipios?&provincia=Buenos-Aires&campos=basico&orden=nombre&max=5")
.then(function(response) {
        municipio=response.data.municipios;
        const cantidad=(response.data.total);
        console.log("Hay en total:", cantidad, "municipios");
        municipio.forEach(async (municipio) => {
        const newMunicipio = new MunicipiosModel(municipio);
        console.log("new" + newMunicipio);
        await newMunicipio.save();

        return
})
}
)
};
module.exports = agregarMunicipiosService;