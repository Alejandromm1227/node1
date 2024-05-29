import express from "express";
import morgan from "morgan";
import enrutadorUsuarios from "./rutas/rutasUsuarios.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);

servidor.get("/", (solicitud, respuesta)=>{
    respuesta.status(404).send("No Encontrado");
})

export default servidor;