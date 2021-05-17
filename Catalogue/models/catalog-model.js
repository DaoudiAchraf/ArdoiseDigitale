const mongoose = require('mongoose');

var catalogSchema = mongoose.Schema ({
    catalogId: Number,
    merchantId: Number,
    productId: Number
  });
  
  var catalogModel = mongoose.model("Catalog", catalogSchema);

  module.exports = catalogModel;
  