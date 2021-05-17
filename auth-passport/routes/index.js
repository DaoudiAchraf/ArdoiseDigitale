const router = require('express').Router();

router.use('/users', require('./agents'));

module.exports = router;
