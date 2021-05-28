const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  comName: {
    type: String,
  },
  numPatent: {
    type: Number,
  },
  addressWay: {
    type: String,
  },
  addressState: {
    type: String,
  },
  addressRegion: {
    type: String,
  },
  addressComplement: {
    type: String,
  },
  juridicState: {
    type: String,
  },
  refCIN: {
    type: Number,
  },
  mandataireFN: {
    type: String,
  },
  mandataireLN: {
    type: String,
  },
  identityCard: {
    type: Object,
  },
  mandatairephoneNumber: {
    type: Number,
  },
  activityDomain: {
    type: String,
  },
  creationDay: {
    type: Date,
    default: Date.now,
  },
  expirationDay: {
    type: Date,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
  walletId: {
    type: String,
  },
  hash: String,
  salt: String,
});

module.exports = mongoose.model("merchant", merchantSchema);
