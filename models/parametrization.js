const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const parametrizationSchema = new Schema(
    {
        uuid: { type: String, required: true },
        oui: { type: String, required: true },
        productClass: { type: String, required: true },
        module: { type: String, required: true },
        params_list: [
            {
                param_name: { type: String, required: true },
                param_path: { type: String, required: true },
            }
        ],
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("ParametrizationModel", parametrizationSchema)