const ProvinciasModel = require("../../models/provincias.models");
const axios = require("axios");

// Se ejecuta una sola vez para traer el listado de todas las provincias a Mongo
const agregarProvinciasService = () => { 

axios.get("https://apis.datos.gob.ar/georef/api/provincias?&campos=basico&orden=nombre&max=5")
.then(function(response) {
        provincia=response.data.provincias;
        // console.log("Prov" + provincia[0].nombre);
        // const cantidad=(response.data.total);
        // console.log("Hay en total:", cantidad, "provincias");
        provincia.forEach(async (provincia) => {
        const newProvincia = new ProvinciasModel(provincia);
        console.log("new" + newProvincia);
        await newProvincia.save();
})
}
)
};
module.exports = agregarProvinciasService