const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  try {

    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(record => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getCategoryTotals = async (req, res) => {

  try {

    const records = await Record.find();

    let categoryTotals = {};

    records.forEach(record => {

      if (!categoryTotals[record.category]) {
        categoryTotals[record.category] = 0;
      }

      categoryTotals[record.category] += record.amount;

    });

    res.json(categoryTotals);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
exports.getRecentTransactions = async (req, res) => {

  try {

    const records = await Record.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};