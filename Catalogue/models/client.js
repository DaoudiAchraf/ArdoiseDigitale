const mongoose = require ('mongoose');

const clientSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    addressWay: {
        type: String,
        required: true
    },
    addressState: {
        type: String
    },
    addressRegion: {
        type: String,
        required: true
    },
    addressComplement: {
        type: String
    },
    photoClient: {
        type: Object
    },
    refCIN: {
        type: Number,
        required: true
    },
    maritalstate: {
        type: String
    },
    identityCard: {
        type: Object
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    creationDay: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        //required: true
    },
    userName: {
        type: String
    },
    walletId: {
        type: String
    },
    account: {
        type: String,
        enum: ['desactivated', 'activated'],
        default: 'activated'
    }
});

module.exports = mongoose.model('client', clientSchema);
