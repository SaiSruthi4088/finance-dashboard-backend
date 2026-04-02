const Record = require("../models/Record");

// CREATE RECORD
exports.createRecord = async (req, res) => {

  try {

    const { amount, type, category, date, notes } = req.body;

    const record = new Record({
      amount,
      type,
      category,
      date,
      notes,
      createdBy: req.user.id
    });

    await record.save();

    res.status(201).json({
      message: "Record created successfully",
      record
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
// GET ALL RECORDS
exports.getRecords = async (req, res) => {

  try {

    const { type, category, startDate, endDate } = req.query;

    let filter = {};

    if (type) {
      filter.type = type;
    }

    if (category) {
      filter.category = category;
    }

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const records = await Record.find(filter)
      .populate("createdBy", "name email");

    res.json(records);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedRecord = await Record.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({
      message: "Record updated successfully",
      updatedRecord
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
// DELETE RECORD
exports.deleteRecord = async (req, res) => {

  try {

    const { id } = req.params;

    const record = await Record.findByIdAndDelete(id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({
      message: "Record deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};