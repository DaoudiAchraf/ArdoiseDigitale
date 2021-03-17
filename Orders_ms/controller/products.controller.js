const Product = require('../model/product.model');


module.exports.add = (req,res)=>{

     new Product(req.body).save()
        .then(result=>res.status(201).json(result._doc))
        .catch(err=>console.log(err));

}

module.exports.delete = (req,res)=>{

    Product.deleteOne({ _id: req.params.id })
    .then(res.status(200).json({ msg: 'product successfully deleted' }));
}

module.exports.update = (req,res)=>{

    Product.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(res.status(202).json(req.body))
    .err(err => console.log(err));
}

module.exports.listAll = (req,res)=>{
    Product.find().then(products => {
        res.status(200).json(products);
    });

}

module.exports.findProductById = (req,res)=>{

    Product.findById(req.params.id).then(product => {
        res.status(200).json(product);
    });
}

module.exports.findProductByName = (req,res)=>{

    Product.findOne({ name : req.params.name }).then(product => {
        res.status(200).json(product);
    });
}

module.exports.getProductsByCategory = (req,res)=>{

    Product.findOne({ category : req.params.category }).then(product => {
        res.status(200).json(product);
    });
}