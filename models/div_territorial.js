const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const divTerritorialSchema = new Schema(
    {
        uuid: { type: String, required: true },
        nombre_div: { type: String, required: true },
        centros: [
            {
             nombre_centro: { type: String, required: true }, 
            }
        ],
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("DivTerritorialModel", divTerritorialSchema)