const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const tipoServicioSchema = new Schema(
    {
        uuid: {type: String, required: true},
        nombre_tipo_servicio: { type: String, required: true},
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("TipoServicioModel", tipoServicioSchema)