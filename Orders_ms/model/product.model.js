const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
//   owner :
//     {
//         type:mongoose.Schema.Types.ObjectId,
//         //ref : 'User'
//     },

  name:
    {
      type: String,
      unique: true,
      required: true,
    },

  description: { type: String },

  brand: { type: String },

  price: { type: Number, required: true },

  imagePath: { type: String },

  category: { type: String },

});

mongoose.model('product', productSchema);
