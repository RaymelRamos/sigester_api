const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const rutaSchema = new Schema(
    {
        uuid: {type: String, required: true},
        nombre_ruta: { type: String, required: true},
        alias_metodo: { type: String, required: true },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("RutaModel", rutaSchema)