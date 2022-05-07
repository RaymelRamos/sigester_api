const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const brasSchema = new Schema(
    {
        uuid: { type: String, required: true },
        nombre_bras: { type: String, required: true },
        subnet_address: { type: String, required: true },
        subnet_mask: { type: String, default: "" },
        ip_equipo: { type: String, default: "" },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("BrasModel", brasSchema)