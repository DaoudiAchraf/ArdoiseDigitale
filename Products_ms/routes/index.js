const express = require('express');
const router = express.Router();

const productsController = require('../controller/products.controller');

router.get('/',productsController.listAll);

router.post('/',productsController.add);
router.put('/:id',productsController.update);
router.delete('/:id',productsController.delete);

module.exports = router;