import express from "express";
import cors from "cors";
import http from "http";

import { Server }
from "socket.io";

import paymentRoutes
from "./routes/paymentRoutes.js";

import {
  connectXRPL,
  getClient
}
from "./services/xrplLiveService.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api",
  paymentRoutes
);

const server =
  http.createServer(app);

const io = new Server(server, {

  cors: {
    origin: "*",
  },

});

global.io = io;

io.on(
  "connection",
  (socket) => {

    console.log(
      "Socket Connected:",
      socket.id
    );

  }
);

const startServer = async () => {

  await connectXRPL();

  const client =
    getClient();

  await client.request({

    command:
      "subscribe",

    streams:
      ["ledger"],

  });

  // NEW LEDGER TIMER
  let previousLedgerTime = null;

  // REPLACED LEDGER EVENT
  client.on(
    "ledgerClosed",

    async (ledger) => {

      try {

        const currentTime =
          Date.now();

        let settlementSpeed = 0;

        if (previousLedgerTime) {

          settlementSpeed =
            (
              (currentTime -
                previousLedgerTime) / 1000
            ).toFixed(2);

        }

        previousLedgerTime =
          currentTime;

        const ledgerData =
          await client.request({

            command:
              "ledger",

            ledger_index:
              "validated",

            transactions:
              true,

          });

        const transactions =
          ledgerData.result
            .ledger
            .transactions || [];

        let paymentVolume = 0;

        transactions.forEach(
          (tx) => {

            if (
              tx.TransactionType ===
              "Payment"
            ) {

              if (
                typeof tx.Amount ===
                "string"
              ) {

                paymentVolume +=
                  parseInt(tx.Amount)
                  / 1000000;

              }

            }

          }
        );

        io.emit(
          "ledgerUpdate",
          {

            ledgerIndex:
              ledger.ledger_index,

            txCount:
              transactions.length,

            paymentVolume:
              paymentVolume.toFixed(2),

            settlementSpeed,

          }
        );

      } catch (err) {

        console.log(err);

      }

    }
  );

  server.listen(
    5000,
    () => {

      console.log(
        "Server running on 5000"
      );

    }
  );

};

startServer();