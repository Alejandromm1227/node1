"use strict";
//importar otro js
import "dotenv/config";
import servidor from "./servidor.js"
import "./conexionBD.js"

// lo q se hace en el servidor
servidor.listen(3000, ()=> {
    console.log("servidor corriendo ");
});
