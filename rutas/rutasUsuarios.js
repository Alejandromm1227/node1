import { Router } from "express";
import controladorUsuarios from "../controladores/controladorUsuario.js"

const enrutadorUsuarios = Router();

enrutadorUsuarios.post("/", controladorUsuarios.crearUsuario )
enrutadorUsuarios.get("/:id", controladorUsuarios.leerUsuario )
enrutadorUsuarios.get("/", controladorUsuarios.leerUsuarios)
enrutadorUsuarios.put("/:id", controladorUsuarios.actualizarUsuario)
enrutadorUsuarios.delete("/:id", controladorUsuarios.eliminarUsuario)

export default enrutadorUsuarios;