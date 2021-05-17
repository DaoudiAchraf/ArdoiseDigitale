const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

module.exports = mongoose.model('agent', AgentSchema);