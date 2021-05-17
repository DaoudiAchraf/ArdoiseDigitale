const express = require('express');

var router = express.Router();

const ardoiseController = require('../controllers/ardoise-controller');

router.delete('/delete' , ardoiseController.delete);
router.post('/add', ardoiseController.add);
router.get('/get' , ardoiseController.get);
router.patch('/addToBookmarks' , ardoiseController.addToBookmarks);
router.patch('/removeFromBookmarks' , ardoiseController.removeFromBookmarks);
router.patch('/close' , ardoiseController.close);


module.exports = router;
