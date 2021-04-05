const Order = require('../model/order.model');

const CURRENT_CLIENT = 'client';

const CURRENT_MERCHANT = 'merchant';

module.exports.add = (req, res) => {
  // console.log(req.headers[CURRENT_CLIENT]);
  new Order({ ...req.body, client: req.headers[CURRENT_CLIENT] }).save()
    .then((result) => res.status(201).json(result.doc))
    .catch((err) => res.status(500).json(err));
};

module.exports.delete = (req, res) => {
  Order.deleteOne({ _id: req.params.id })
    .then(res.status(200).json({ msg: 'Order successfully deleted' }));
};

module.exports.update = (req, res) => {
  Order.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(res.status(202).json(req.body))
    .err((err) => res.status(500).json(err));
};

module.exports.addToBookmarks = (req, res) => {
  Order.updateOne({ _id: req.params.id }, { $set: { bookmarked: true } })
    .then(res.status(200).json(req.body))
    .err((err) => res.status(500).json(err));
};

module.exports.removeFromBookmarks = (req, res) => {
  Order.updateOne({ _id: req.params.id }, { $set: { bookmarked: false } })
    .then(res.status(200).json(req.body))
    .catch((err) => res.status(500).json(err));
};

module.exports.listAll = (req, res) => {
  Order.find().then((Orders) => {
    res.status(200).json(Orders);
  });
};

module.exports.getOrdersByClient = (req, res) => {
  Order.find({ client: req.headers[CURRENT_CLIENT] }).populate('products').then((Orders) => {
    res.status(200).json(Orders);
  })
    .catch((err) => res.status(500).json(err));
};

module.exports.getOrdersByMerchant = (req, res) => {
  Order.find({ merchant: req.headers[CURRENT_MERCHANT] }).populate('products').then((Orders) => {
    res.status(200).json(Orders);
  })
    .catch((err) => res.status(500).json(err));
};

module.exports.findOrderById = (req, res) => {
  Order.findOne({ _id: req.params.id }).then((order) => {
    res.status(200).json(order);
  });
};

// module.exports.changeStatus = (req,res)=>{

// }
