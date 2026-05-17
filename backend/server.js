import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import paymentRoutes from "./routes/paymentRoutes.js";

import {
  connectXRPL,
  getClient,
} from "./services/xrplLiveService.js";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "https://arc-remit-pgnj.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// API Routes
app.use("/api", paymentRoutes);

// Create HTTP Server
const server = http.createServer(app);

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: "https://arc-remit-pgnj.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

global.io = io;

// Socket Connection
io.on("connection", (socket) => {
  console.log("Socket Connected:", socket.id);
});

const startServer = async () => {
  // Connect XRPL
  await connectXRPL();

  const client = getClient();

  // Subscribe to ledger stream
  await client.request({
    command: "subscribe",
    streams: ["ledger"],
  });

  // Ledger timer
  let previousLedgerTime = null;

  // Listen for ledger updates
  client.on("ledgerClosed", async (ledger) => {
    try {
      const currentTime = Date.now();

      let settlementSpeed = 0;

      if (previousLedgerTime) {
        settlementSpeed = (
          (currentTime - previousLedgerTime) / 1000
        ).toFixed(2);
      }

      previousLedgerTime = currentTime;

      const ledgerData = await client.request({
        command: "ledger",
        ledger_index: "validated",
        transactions: true,
      });

      const transactions =
        ledgerData.result.ledger.transactions || [];

      let paymentVolume = 0;

      transactions.forEach((tx) => {
        if (tx.TransactionType === "Payment") {
          if (typeof tx.Amount === "string") {
            paymentVolume += parseInt(tx.Amount) / 1000000;
          }
        }
      });

      io.emit("ledgerUpdate", {
        ledgerIndex: ledger.ledger_index,
        txCount: transactions.length,
        paymentVolume: paymentVolume.toFixed(2),
        settlementSpeed,
      });
    } catch (err) {
      console.log(err);
    }
  });

  // Start server
  server.listen(5000, () => {
    console.log("Server running on 5000");
  });
};

startServer();

// Export io
export { io };