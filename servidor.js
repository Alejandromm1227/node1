import express from "express";
import enrutadorUsuarios from "./rutas/rutasUsuarios.js";

const servidor = express();

servidor.use("/usuarios", enrutadorUsuarios)

servidor.get("/", (solicitud, respuesta)=>{
    respuesta.status(404).send("No Encontrado");
})

export default servidor;