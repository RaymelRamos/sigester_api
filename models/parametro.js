const mongoose = require('mongoose')
const { Schema } = require('mongoose')

// ('', '', 'first_name', 'last_name', 'groups', 'is_staff'
const parametroSchema = new Schema(
    {
        uuid: { type: String, required: true },
        param_name: { type: String, required: true },
        param_value: { type: String },
        _writable: { type: Boolean },
        data_type: { type: String, default: ""},
        model_oui: { type: String },
        model_product_class: { type: String },
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    }, { timestamps: true })

module.exports = mongoose.model("ParametroModel", parametroSchema)