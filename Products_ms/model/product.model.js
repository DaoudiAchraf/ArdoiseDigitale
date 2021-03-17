const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // owner : 
    // {
    //     type:mongoose.Schema.Types.ObjectId,
    //     //ref : 'User'
    // },

    name :
    {   type : String,
        unique : true,
        required : true
    },

    description :{type : String},

    type :{type : String},

    brand:{type : String},

    price:{type : Number},
    
    imagePath:{type : String},

    category: {type : String}
    

 })


module.exports =  mongoose.model('product', productSchema);