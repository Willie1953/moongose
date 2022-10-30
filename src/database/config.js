const mongoose = require ('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASE_URL || "";

// const mongoDbConnect = async () => {
//     try {
//         await mongoose.connect(DATABASE);
//         console.log('Base de datos conectada ahora :)');
//     } catch (error) {
//         console.log(error);
//     } 
// };
// mongoDbConnect();
// module.exports = mongoDbConnect

// IIFE
(async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log("Base de datos conectada!");
    }   catch (error) {
        console.error(error);
    }
})();

module.exports = mongoose;
/*es un funcion IIFE que se ejecuta automaticamente por los () del final*/


// const ciudades = () => {
// es esta que sigue
    // // axios.get("https://apis.datos.gob.ar/georef/api/provincias?orden=nombre")
    // .then(function(response) {
    //     console.log(response.data);
    //     const provincias=(response.data.provincias);
    //     const cantidad=(response.data.total);
    //     // const provincia=(response.data.parametros.provincia)
    //     console.log("Hay en total: ", cantidad, "provincias");
    //     provincias.forEach(element => {
    //         console.log ("La provincia es: ", element.id, element.nombre)
    //     });
    // });


// axios.get("https://apis.datos.gob.ar/georef/api/municipios?provincia=salta&campos=nombre&max=200&orden=nombre&exacto")
//     .then(function(response) {
//         console.log(response.data);
//         const ciudades=(response.data.municipios);
//         const total=(response.data.total);
//         const provincia=(response.data.parametros.provincia)
//         console.log("En ", provincia, "hay ",total, "ciudades");
//         console.log ("las ciudades son: ", ciudades[1].id, ciudades[1].nombre)
//     });
    
