const controladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
        console.log("solicitud: ", solicitud.body);
/*         if (solicitud.body.nombre === "") throw new Error ("Falta nombre");
        if (solicitud.body.apellido === "") throw new Error ("Falta apellido");
        if (solicitud.body.pais === "") throw new Error ("Falta pais");
        if (solicitud.body.username === "") throw new Error ("Falta username");
        if (solicitud.body.email === "") throw new Error ("Falta correo");
        if (solicitud.body.telefono === "") throw new Error ("Falta numero de telefono");
        if (solicitud.body.documento === "") throw new Error ("Falta documento"); */
        respuesta.json({mensaje: "POST usuarios works!"});
    },
    leerUsuario: async (solicitud, respuesta) => {
        try {
            console.log(solicitud.params.id);
            respuesta.json({mensaje: "GET usuario works!"});
        }
        catch (error){
            console.log("error: ", error);
            respuesta.json({error: true, mensaje: "Ocurrio un error al leer el usuario"})
        }
    },
    leerUsuarios: async (solicitud, respuesta) => {
        try {
            respuesta.json({mensaje: "GET usuarios works!"});
        } catch(error){
            console.log("error: ", error);
            respuesta.json({error: true, mensaje: "Ocurrio un error al leer todos los usuarios"})
        }  
    },
    actualizarUsuario: async (solicitud, respuesta) => {
       try {
        console.log(solicitud.params.id);
        console.log("solicitud: ", solicitud.body);
        respuesta.json({mensaje: "PUT usuarios works!"});
       } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "Ocurrio un error al actualizar el usuario"})
       }
    },
    eliminarUsuario: async (solicitud, respuesta) => {
        try {
            console.log(solicitud.params.id);
            respuesta.json({mensaje: "DELETE usuarios works!"});
        } catch (error) {
            console.log("error: ", error);
            respuesta.json({error: true, mensaje: "Ocurrio un error al eliminar el usuario"})
        }
    }
}

export default controladorUsuarios;

/* const usuario = {
    nombre : "",
    apellido : "",
    fechaDeNacimiento : 4,
    pais : "",
    password : "",
    confirmarPassword : "",
    username : "",
    email : "",
    telefono : 56467,
    documento : 54,
} */