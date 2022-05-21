const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const tipoServicioSchema = new Schema(
    {
        nombre: { type: String, required: true},
        value: { type: String, required: true},
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("TipoServicioModel", tipoServicioSchema)