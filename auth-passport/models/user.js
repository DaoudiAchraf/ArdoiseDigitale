const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema ({
    
    userName: {
        type: String,
    },
    role: {
        type: String,
        enum: ["client", "merchant", "pendingMerchant", "agent"]
    },
    password: {
        type: String,
    },
    hash: {
        type:  String,
    },
    salt:
    {
        type: String
    } 

});

module.exports  = mongoose.model('User', userSchema);
