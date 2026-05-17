import express from "express";

import {
  sendPayment,
  getBalance
} from "../controllers/paymentController.js";

const router = express.Router();

// SEND PAYMENT
router.post(
  "/send",
  sendPayment
);

// GET WALLET BALANCE
router.get(
  "/balance",
  getBalance
);

export default router;