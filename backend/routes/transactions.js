import express from "express";

const router = express.Router();

let transactions = [];

export const addTransaction = (tx) => {
  transactions.unshift(tx);

  if (transactions.length > 10) {
    transactions.pop();
  }
};

router.get("/", (req, res) => {
  res.json(transactions);
});

export default router;