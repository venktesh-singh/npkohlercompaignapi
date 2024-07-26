const mongoose = require('mongoose')

const commonFormSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true,
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    npuser: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }
});

commonFormSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

commonFormSchema.set('toJSON', {
    virtuals: true,
});

const CommonForm = mongoose.model('CommonForm', commonFormSchema);

module.exports = CommonForm;