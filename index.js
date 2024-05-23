"use strict";
console.log("works!");

const express = require("express");

const servidor = express();

servidor.get("/",(solicitud, respuesta)=>{
    respuesta.json({
        saludo : "hola, ya quedo"
    })
});

servidor.listen(3000);
console.log("ya quedo");