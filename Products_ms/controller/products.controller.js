const Product = require('../model/product.model');


module.exports.add = (req,res)=>{

     new Product(req.body).save()
        .then(result=>res.status(201).json(result._doc))
        .catch(err=>res.status(500).json(err));

}

module.exports.delete = (req,res)=>{

    Product.deleteOne({ _id: req.params.id })
    .then(result=>res.status(200).json({ 
        msg: 'Product successfully deleted.',
        ...result
    })).catch(err=>
        res.status(400).json({msg: "Could not delete product with id " + req.params.id}))
}

module.exports.update = (req,res)=>{

    Product.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(result => res.status(202).json(result._doc))
    .catch(err => res.status(500).json(err));
}

module.exports.listAll = (req,res)=>{

    Product.find().then(products => {
        res.status(200).json(products);
    }).catch(err=>
         res.status(500).json({msg: "Error occurred while retrieving products."}));

}

module.exports.findProductById = (req,res)=>{

    Product.findById(req.params.id).then(product => {
        res.status(200).json(product);
    }).catch(err=>
        res.status(500).json({message: "Could not retrieve product with id " + req.params.id}));
}

module.exports.findProductByName = (req,res)=>{

    Product.findOne({ name : req.params.prodName }).then(product => {
        res.status(200).json(product);
    }).catch(err=>
        res.status(500).json({message: "Could not retrieve product with name " + req.params.prodName}));
}

module.exports.findProductsByCategory = (req,res)=>{

    Product.find({ category : req.params.categoryName }).then(product => {
        res.status(200).json(product);
    })
    .catch(err=>
        res.status(500).json({
            message: "Error occurred retrieving products in category " + req.params.categoryName}));
}