const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const usuarioSchema = new Schema(
    {
        uuid: { type: String, required: true },
        nombre_usuario: { type: String, required: true },
        email: { type: String, required: false },
        div_territorial_id: { type: String, required: true },
        nivel_acceso_id: { type: String, required: true },
        module: { type: String, required: true },
        role: {type: String, ref: "RolModel"},
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("UsuarioModel", usuarioSchema)