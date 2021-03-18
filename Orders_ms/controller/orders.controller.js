const Order = require('../model/order.model');

const CURRENT_CLIENT = "client";
const CURRENT_MERCHANT = "merchant";


module.exports.add = (req,res)=>{
    
    // console.log(req.headers[CURRENT_CLIENT]);
     new Order({...req.body,client:req.headers[CURRENT_CLIENT]}).save()
        .then(result=>res.status(201).json(result._doc))
        .catch(err=>console.log(err));

}

module.exports.delete = (req,res)=>{

    Order.deleteOne({ _id: req.params.id })
    .then(res.status(200).json({ msg: 'Order successfully deleted' }));
}

module.exports.update = (req,res)=>{

    Order.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(res.status(202).json(req.body))
    .err(err => res.status(500).json(err));
}

module.exports.addToBookmarks = (req,res)=>{

    Order.updateOne({ _id: req.params.id }, { $set: { bookmarked: true } })
    .then(res.status(202).json(req.body))
    .err(err => res.status(500).json(err));
}

module.exports.removeFromBookmarks = (req,res)=>{

    Order.updateOne({ _id: req.params.id }, { $set: { bookmarked: false } })
    .then(res.status(202).json(req.body))
    .err(res.status(500).json(err));
}


module.exports.listAll = (req,res)=>{

    console.log("enter");
//     axios.get('http://localhost:5000')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   }).catch(err=>console.log(err));

    Order.find().then(Orders => {
        res.status(200).json(Orders);
    });

}



module.exports.getOrdersByClient = (req,res)=>{

    //console.log(req.headers[CURRENT_CLIENT]);

    console.log( req.headers[CURRENT_CLIENT]);
    
    console.log("dd");

    Order.find({ client : req.headers[CURRENT_CLIENT] }).populate("products").then(Orders => {
        console.log(Orders);
        res.status(200).json(Orders);
    })
    .catch(err =>console.log(err));
}

module.exports.getOrdersByMerchant = (req,res)=>{

    Order.find({ merchant : req.headers[CURRENT_MERCHANT] }).populate("products").then(Orders => {
        res.status(200).json(Orders);
    })
    .catch(err => res.status(500).json(err));
}

module.exports.findOrderById = (req,res)=>{

    Order.findOne({ _id : req.params.id}).then(Order => {
        res.status(200).json(Order);
    });
}