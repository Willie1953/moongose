const MunicipiosModel = require("../../models/municipios.models");

const agregarMunicipioService = (req) => {    
        console.log("en agregar Muicipio");

        axios.get("https://apis.datos.gob.ar/georef/api/municipios?provincia=Buenos-Aires&orden=nombre&campos=basico&max=300")
        .then(function(response) {
                const municipios=(response.data.municipios);       
                const cantidad=(response.data.cantidad);
                const prov=(response.data.parametros.provincia);
                console.log("Hay en total:", cantidad, "municipios en la Provincia " + prov);
                        console.log("en agregarP");
                        municipios.forEach(async (element) => {
                                const  newMunicipio = new MunicipiosModel(idmuni=element.id, nombremuni=element.nombre, datecreacion=Date.now);
                                await newMunicipio.save();
                                res.json ({message:"Municipio guardado", newMunicipio});
                                return;
                        });
                }
        )};

module.exports = agregarMunicipioService