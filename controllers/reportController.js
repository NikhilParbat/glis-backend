const Land = require("../models/landModel.js");

const getSummaryReport = async (req, res) => {
  try {
    const total = await Land.countDocuments();
    const encroached = await Land.countDocuments({ encroached: true });
    const disputed = await Land.countDocuments({ dispute: true });

    const totalValue = await Land.aggregate([
      { $group: { _id: null, totalValue: { $sum: "$value" } } },
    ]);

    res.json({
      totalLands: total,
      encroached,
      disputed,
      totalValue: totalValue[0]?.totalValue || 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSummaryReport };
