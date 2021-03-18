const express = require('express');
const router = express.Router();

const ordersController = require('../controller/orders.controller');

router.get('/',ordersController.listAll);

router.get('/client',ordersController.getOrdersByClient);

router.get('/merchant',ordersController.getOrdersByMerchant);

router.post('/',ordersController.add);
router.put('/:id',ordersController.update);
router.delete('/:id',ordersController.delete);

module.exports = router;