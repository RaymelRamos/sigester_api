const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const quejaSiprecSchema = new Schema(
    {
        uuid: {type: String, required: true},
        servicio: { type: String, required: true},
        login: { type: String, required: true },
        cod_proced: { type: String, required: true },
        cod_prod: { type: String, required: true },
        observacion: { type: String, required: true },
        grupo: { type: String, required: true },
        folio: { type: String, required: true },
        nomb_local: { type: String, required: true },
        tel_local: { type: String, required: true },
        fijo: { type: String, required: true },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("QuejaSiprecModel", quejaSiprecSchema)