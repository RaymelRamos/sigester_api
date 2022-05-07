const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const grupoSchema = new Schema(
    {
        uuid: {type: String, required: true},
        cod_prod: { type: String, required: true},
        descrip: { type: String, required: true},
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("GrupoModel", grupoSchema)