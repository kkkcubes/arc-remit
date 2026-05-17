import transactions from "../data/transactions.js";

export const getTransactions = (req, res) => {

  res.json({
    success: true,
    transactions,
  });
};