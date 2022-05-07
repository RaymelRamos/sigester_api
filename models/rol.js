const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const rolSchema = new Schema(
    {
        uuid: {type: String, required: true},
        nombre_rol: { type: String, required: true},
        rol_ruta: { type: Array, required: true },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("RolModel", rolSchema)