const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const parametrizationSchema = new Schema(
    {
        uuid: { type: String, required: true },
        model: { type: String, required: true },
        params_list: [String],
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("ParametrizationModel", parametrizationSchema)