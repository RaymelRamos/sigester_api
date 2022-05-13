const mongoose = require('mongoose')
const { Schema } = require('mongoose')

// ('', '', 'first_name', 'last_name', 'groups', 'is_staff'
const parametroSchema = new Schema(
    {
        uuid: { type: String, required: true },
        param_name: { type: String, required: true },
        param_value: { type: String, required: true },
        data_type: { type: String, default: "", required: true },
        model_id: { type: String, required: true },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("ParametroModel", parametroSchema)