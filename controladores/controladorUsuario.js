import ModeloUsuario from "../modelos/modeloUsuario.js";

const controladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
        try {
            const nuevoUsuario = new ModeloUsuario(solicitud.body);
            const usuarioCreado = await nuevoUsuario.save();
            if (usuarioCreado._id) {
                respuesta.json({
                    resultado : "bien",
                    mensaje : "usuario creado",
                    datos : usuarioCreado._id
                });
            }
        }
        catch (error) {
                respuesta.json({
                    resultado : "mal",
                    mensaje : "error al crear usuario",
                    datos : error
         });  
    }},

    leerUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id);
            if (usuarioEncontrado._id) {
                respuesta.json({
                    respuesta : "bien",
                    mensaje : "usuario leido",
                    datos : usuarioEncontrado
                });
            }
        } catch (error){
            respuesta.json({
                respuesta : "mal",
                mensaje : "ocurrio un error al leer el usuario",
                datos : error
            });
        }
    },
    leerUsuarios: async (solicitud, respuesta) => {
        try {
            const todosLosUusario = await ModeloUsuario.find();
            respuesta.json({
                respuesta : "bien",
                mensaje : "usuarios leidos",
                datos : todosLosUusario
            });
        } catch(error){
            respuesta.json({
                respuesta : "mal",
                mensaje : "ocurrio un error al leer los usuarios",
                datos : error
        });
        }  
    },
    actualizarUsuario: async (solicitud, respuesta) => {
       try {
        const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(solicitud.params.id,solicitud.body);
        if (usuarioActualizado._id) {
            respuesta.json({
                resultado : "bien",
                mensaje : "usuario actualizado",
                datos : usuarioActualizado._id
            });
        }
       } catch (error) {
         respuesta.json({
            resultado : "mal",
            mensaje : "error al actualizar usuario",
            datos : error
         });
       }
    },
    eliminarUsuario: async (solicitud, respuesta) => {
        try {
            const usuaioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id);
            if (usuaioEliminado._id) {
                respuesta.json({
                    respuesta : "bien",
                    mensaje : "usuario eliminado",
                    datos : null
                });
            }
        } catch (error){
            respuesta.json({
                respuesta : "mal",
                mensaje : "ocurrio un error al eliminar usuario",
                datos : error
            });
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