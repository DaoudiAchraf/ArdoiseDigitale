var express = require('express');
const auth = require('../middleware/auth');

var router = express.Router();

/**
 * @route   GET /transactions
 * @desc    Get All transactions
 * @access  Private
 */
router.get('/', auth, async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    if (!transactions) throw Error('no transactions found');

    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
