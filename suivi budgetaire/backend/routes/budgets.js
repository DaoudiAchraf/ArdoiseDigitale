var express = require('express');
const auth = require('../middleware/auth');
var ObjectId = require('mongoose').Types.ObjectId;
const Budget = require('../models/Budget');
var router = express.Router();

/**
 * @route   GET /budgets
 * @desc    Get All Budgets
 * @access  Private
 */

router.get('/', auth, async (req, res) => {
  var objId = new ObjectId(
    req.user.id.length != 12 ? '123456788012' : req.user.id
  );
  console.log(objId);
  try {
    const outDatedBudgets = await Budget.updateMany(
      {
        $or: [{ clientId: objId }, { merchantId: objId }],
        endDate: { $lte: Date.now() },
        state: true,
      },
      { state: false }
    );

    console.log(outDatedBudgets);

    const budgets = await Budget.find({
      $or: [{ clientId: objId }, { merchantId: objId }],
    });
    if (budgets.length == 0) throw Error('no budgets');

    res.status(200).json(budgets);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST /budgets
 * @desc    Create A Budget
 * @access  Private
 */

router.post('/', auth, async (req, res) => {
  console.log(req.user);
  var objId = new ObjectId(
    req.user.id.length != 12 ? '123456789012' : req.user.id
  );
  console.log(objId);
  const newBudget = new Budget(req.body);
  console.log(newBudget);
  if (req.user.role == 'client') newBudget.clientId = objId;

  if (req.user.role == 'merchant') newBudget.merchantId = objId;

  try {
    const budget = await newBudget.save();
    if (!budget) throw Error('Something went wrong saving the Budget');

    res.status(200).json(budget);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE /budgets/:id
 * @desc    Delete A Budget
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
  try {
    const budget = await Budget.findByIdAndRemove(req.params.id);
    if (!budget) throw Error('No Budget found');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

/**
 * @route   PUT /budgets/:id
 * @desc    Modify A Budget
 * @access  Private
 */

router.put('/:id', auth, async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body);
    if (!budget) throw Error('No Budget found');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
