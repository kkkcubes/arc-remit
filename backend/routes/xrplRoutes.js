import express from "express";

import {
  getWalletBalance,
  getNetworkInfo,
} from "../controllers/xrplController.js";

const router = express.Router();

router.get("/balance", getWalletBalance);

router.get("/network", getNetworkInfo);

export default router;