import express from "express";
import enrutadorUsuarios from "./rutas/rutasUsuarios.js";

const servidor = express();

servidor.use("/usuarios", enrutadorUsuarios);

servidor.get("/", function(req, res){
    res.json({mensaje: "works!"});
})

export default servidor;