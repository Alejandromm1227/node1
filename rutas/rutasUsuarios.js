import { Router } from "express";

const enrutadorUsuarios = Router();

enrutadorUsuarios.post("./", (solicitud, respuesta) => {
    respuesta.json({mensaje: "POST usuarios works!"});
})
enrutadorUsuarios.get("./:id", (solicitud, respuesta) => {
    respuesta.json({mensaje: "GET usuario works!"});
})
enrutadorUsuarios.get("./", (solicitud, respuesta) => {
    respuesta.json({mensaje: "GET usuarios works!"});
})
enrutadorUsuarios.put("./:id", (solicitud, respuesta) => {
    respuesta.json({mensaje: "PUT usuarios works!"});
})
enrutadorUsuarios.delete("./:id", (solicitud, respuesta) => {
    respuesta.json({mensaje: "DELETE usuarios works!"});
})

export default enrutadorUsuarios;