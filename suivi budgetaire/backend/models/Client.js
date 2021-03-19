const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  addressWay: {
    type: String,
    required: true,
  },
  addressState: {
    type: String,
  },
  addressRegion: {
    type: String,
    required: true,
  },
  addressComplement: {
    type: String,
  },
  photoClient: {
    type: Object,
  },
  refCIN: {
    type: Number,
    required: true,
  },
  maritalstate: {
    type: String,
  },
  identityCard: {
    type: Object,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  creationDay: {
    type: Date,
    default: Date.now,
  },
  walletId: {
    type: Number,
  },
});

module.exports = mongoose.model('client', ClientSchema);
