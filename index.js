"use strict";
//importar otro js
import servidor from "./servidor.js"

// lo q se hace en el servidor
servidor.listen(3000, ()=> {
    console.log("servidor corriendo ");
});
