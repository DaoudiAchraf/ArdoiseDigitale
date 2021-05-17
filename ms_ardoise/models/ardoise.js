const mongoose = require ('mongoose');

const ardoiseSchema = new mongoose.Schema ({
    clientId: {
        type: String
    },
    merchantId: {
        type: String
    },
    commandId: {
        type: String
    },
    state: {
        type: String,
        enum: ['closed', 'pending'],
        default: 'pending'
    },
    creationDay: {
        type: Date
    },
    closingDay: {
        type: Date
    },
    bookmarked: { type: Boolean, default: false }
});

module.exports  = mongoose.model('ardoise', ardoiseSchema);
