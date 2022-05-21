const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const nivelAccesoSchema = new Schema(
    {
        uuid: {type: String, required: true},
        nombre: { type: String, required: true},
        descripcion: { type: String},
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("NivelAccesoModel", nivelAccesoSchema)