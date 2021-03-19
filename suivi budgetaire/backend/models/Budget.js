const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BudgetSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'client',
  },
  merchantId: {
    type: Schema.Types.ObjectId,
    ref: 'merchant',
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  reminderValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'mensuel',
    enum: ['annuel', 'mensuel', 'hebdomadaire', 'jounalier'],
  },
  state: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
    min: Date.now,
  },
});

module.exports = Budget = mongoose.model('budgets', BudgetSchema);
