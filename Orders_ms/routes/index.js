const express = require('express');
const router = express.Router();

const productsController = require('../controller/products.controller');

router.get('/',productsController.listAll);

router.post('/',productsController.add);
router.put('/:id',productsController.update);
router.delete('/:id',productsController.delete);

module.exports = router;



// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;



