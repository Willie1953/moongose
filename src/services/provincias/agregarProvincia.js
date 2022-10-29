const ProvinciasModel = require("../../models/provincias.model");
const axios = require("axios");

// Se ejecuta una sola vez para traer el listado de todas las provincias a Mongo
console.log("en agregar P");
axios.get("https://apis.datos.gob.ar/georef/api/provincias?orden=nombre")
.then(function(response) {
        const provincias=(response.data.provincias);
        
        const cantidad=(response.data.total);
        console.log("Hay en total: ", cantidad, "provincias")

        provincias.forEach(element => {
                console.log("en el Each " + element.id, element.nombre);
                const agregarProvinciasService = async (req, res) => { 
                const newProvincia = new ProvinciasModel(idprov=element.id, nombre=element.nombre, datecreacion.Date.now);
                await newProvincia.save();
                res.json ({message:"Provincia guardada", newProvincia});
                return newProvincia;
                }
        module.exports = agregarProvinciasService;  
        });
        });




