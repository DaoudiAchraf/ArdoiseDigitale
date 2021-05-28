const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  username: String,
  password: String,
  hash: String,
  salt: String,
});

module.exports = mongoose.model("agent", AgentSchema);
