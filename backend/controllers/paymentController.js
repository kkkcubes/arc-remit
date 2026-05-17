import xrpl from "xrpl";
import dotenv from "dotenv";

dotenv.config();

export const sendPayment = async (req, res) => {

  let client;

  try {

    const recipient =
      String(req.body.recipient).trim();

    const amount =
      String(req.body.amount).trim();

    console.log("REQUEST RECEIVED");
    console.log("Recipient:", recipient);
    console.log("Amount:", amount);

    // VALIDATION

    if (!recipient || !amount) {

      return res.status(400).json({
        success: false,
        message:
          "Recipient and amount required",
      });

    }

    // CONNECT XRPL

    client = new xrpl.Client(
      "wss://s.altnet.rippletest.net:51233"
    );

    await client.connect();

    console.log("CONNECTED TO XRPL");

    // CREATE WALLET

    const wallet = xrpl.Wallet.fromSeed(
      String(process.env.XRPL_SECRET).trim()
    );

    console.log("SENDER WALLET:");
    console.log(wallet.address);

    // CREATE PAYMENT OBJECT

    const payment = {

      TransactionType: "Payment",

      Account: wallet.address,

      Amount: xrpl.xrpToDrops(amount),

      Destination: recipient,

    };

    console.log("PAYMENT OBJECT:");
    console.log(payment);

    // AUTOFILL TX

    const prepared =
      await client.autofill(payment);

    console.log("TRANSACTION PREPARED");

    // SIGN TX

    const signed =
      wallet.sign(prepared);

    console.log("TRANSACTION SIGNED");

    // SUBMIT TX

    const response =
      await client.submitAndWait(
        signed.tx_blob
      );

    console.log("XRPL RESULT:");
    console.log(response);

    // CHECK SUCCESS

    if (

      response.result.meta
        .TransactionResult !==
      "tesSUCCESS"

    ) {

      throw new Error(

        response.result.meta
          .TransactionResult

      );

    }

    // SOCKET EVENT

    if (global.io) {

      global.io.emit(
        "newTransaction",
        {

          hash:
            response.result.hash,

          amount,

          recipient,

          status: "Confirmed",

          explorer:
            `https://testnet.xrpl.org/transactions/${response.result.hash}`,

          timestamp:
            new Date(),

        }
      );

    }

    // DISCONNECT

    await client.disconnect();

    // SUCCESS RESPONSE

    return res.status(200).json({

      success: true,

      hash:
        response.result.hash,

      explorer:
        `https://testnet.xrpl.org/transactions/${response.result.hash}`,

      result:
        response.result.meta
          .TransactionResult,

    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    // SAFE DISCONNECT

    if (client?.isConnected()) {

      await client.disconnect();

    }

    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Transaction failed",

    });

  }

};

// REAL-TIME WALLET BALANCE

export const getBalance = async (
  req,
  res
) => {

  let client;

  try {

    client = new xrpl.Client(
      "wss://s.altnet.rippletest.net:51233"
    );

    await client.connect();

    const wallet = xrpl.Wallet.fromSeed(
      String(process.env.XRPL_SECRET).trim()
    );

    const response =
      await client.request({

        command: "account_info",

        account:
          wallet.address,

        ledger_index:
          "validated",

      });

    const balance =
      xrpl.dropsToXrp(

        response.result
          .account_data.Balance

      );

    await client.disconnect();

    return res.status(200).json({

      success: true,

      address:
        wallet.address,

      balance,

    });

  } catch (error) {

    console.log(error);

    if (client?.isConnected()) {

      await client.disconnect();

    }

    return res.status(500).json({

      success: false,

      message:
        "Failed to fetch balance",

    });

  }

};

// REAL-TIME XRPL NETWORK INFO

export const getNetworkInfo = async (
  req,
  res
) => {

  let client;

  try {

    client = new xrpl.Client(
      "wss://s.altnet.rippletest.net:51233"
    );

    await client.connect();

    const ledger =
      await client.request({

        command: "ledger",

        ledger_index:
          "validated",

      });

    await client.disconnect();

    return res.status(200).json({

      success: true,

      ledgerIndex:
        ledger.result.ledger_index,

      closeTime:
        ledger.result.ledger.close_time,

      validated:
        ledger.result.validated,

    });

  } catch (error) {

    console.log(error);

    if (client?.isConnected()) {

      await client.disconnect();

    }

    return res.status(500).json({

      success: false,

      message:
        "Failed to fetch network info",

    });

  }

};