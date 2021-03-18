const mongoose = require('mongoose');
require('./product.model');

const orderSchema = new mongoose.Schema({
    client : 
    {
        type:mongoose.Schema.Types.ObjectId,
        //ref : 'Client'
    },

    merchant : 
    {
        type : mongoose.Schema.Types.ObjectId,
        //ref : 'Merchant'
    },

    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product'
    }],

    date : { type: Date, default: Date.now },

    status : {type: String,
            enum: ['pending', 'validated', 'canceled', 'terminated'],
            default: 'pending'},

    bookmarked : {type:Boolean, default: false}

 })



module.exports =  mongoose.model('order', orderSchema);