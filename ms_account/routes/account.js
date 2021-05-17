const express = require('express');
 
var router = express.Router();

const accountController = require('../controllers/account-controller');

router.delete('/delete' , accountController.delete);
router.put('/update', accountController.update);
router.get('/get' , accountController.get);
router.patch('/desactive', accountController.desactive);
router.post('/add', accountController.add);


module.exports = router;

