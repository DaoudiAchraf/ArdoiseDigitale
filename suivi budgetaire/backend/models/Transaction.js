const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'client',
  },
  merchantId: {
    type: Schema.Types.ObjectId,
    ref: 'merchant',
  },
  commandIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'order',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Transaction = mongoose.model(
  'transactions',
  TransactionSchema
);
