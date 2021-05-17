const express = require('express');

var router = express.Router();

const catalogController = require('../controllers/catalog-controller');

router.post('/add' , catalogController.add);
router.put('/update', catalogController.update);
router.get('/get' ,catalogController.get);


module.exports = router;
