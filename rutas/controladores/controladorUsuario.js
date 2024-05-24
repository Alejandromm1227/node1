const controladorUsuarios = {
    crearUsuario: (solicitud, respuesta) => {
        respuesta.json({mensaje: "POST usuarios works!"});
    },
    leerUsuario: (solicitud, respuesta) => {
        respuesta.json({mensaje: "GET usuarios works!"});
    },
    leerUsuarios: (solicitud, respuesta) => {
        respuesta.json({mensaje: "GET usuarios works!"});
    },
    actualizarUsuario: (solicitud, respuesta) => {
        respuesta.json({mensaje: "PUT usuarios works!"});
    },
    eliminarUsuario:  (solicitud, respuesta) => {
        respuesta.json({mensaje: "DELETE usuarios works!"});
    }
}

export default controladorUsuarios;