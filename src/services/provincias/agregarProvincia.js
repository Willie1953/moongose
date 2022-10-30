const ProvinciasModel = require("../../models/provincias.model");
const axios = require("axios");

// Se ejecuta una sola vez para traer el listado de todas las provincias a Mongo
console.log("en agregar Prov");
setTimeout(function(){console.log("En espera");}, 400); 
console.log("sigue");
axios.get("https://apis.datos.gob.ar/georef/api/provincias?orden=nombre")
.then(function(response) {
        const provincias=(response.data.provincias);       
        const cantidad=(response.data.total);
        console.log("Hay en total:", cantidad, "provincias");
        const agregarProvinciasService = (res) => { 
                console.log("en agregarP")
                provincias.forEach(async (element) => {
                        const  newProvincia = new ProvinciasModel(idprov=element.id, nombre=element.nombre, datecreacion.Date.now);
                        await newProvincia.save();
                        res.json ({message:"Provincia guardada", newProvincia});
                        return newProvincia
                });
                module.exports = agregarProvinciasService; 
        };
})

// console.log("en el Each " + element.id, element.nombre);