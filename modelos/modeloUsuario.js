import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        nombre: {type: String, required:true},
        pais: {type: String, required:true},
        fechaNacimiento: {type: Date, required:true},
        telefono: {type: Number, required:true},
    })

export default model("usuario", esquemaUsuario);