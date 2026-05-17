import xrpl from "xrpl";
import dotenv from "dotenv";

dotenv.config();

export const sendPayment = async (req, res) => {

  try {

    const recipient =
      req.body.recipient.trim();

    const amount =
      req.body.amount;

    console.log(
      "REQUEST RECEIVED"
    );

    console.log(
      recipient,
      amount
    );

    const client =
      new xrpl.Client(
        "wss://s.altnet.rippletest.net:51233"
      );

    await client.connect();

    console.log(
      "CONNECTED TO XRPL"
    );

    const wallet =
      xrpl.Wallet.fromSeed(
        process.env.XRPL_SECRET
      );

    console.log(
      "SENDER WALLET:"
    );

    console.log(
      wallet.address
    );

    const payment = {

      TransactionType:
        "Payment",

      Account:
        wallet.address,

      Amount:
        xrpl.xrpToDrops(amount),

      Destination:
        recipient,

    };

    console.log(
      "PAYMENT OBJECT:"
    );

    console.log(payment);

    const prepared =
      await client.autofill(
        payment
      );

    console.log(
      "TRANSACTION PREPARED"
    );

    const signed =
      wallet.sign(prepared);

    console.log(
      "TRANSACTION SIGNED"
    );

    const result =
      await client.submitAndWait(
        signed.tx_blob
      );

    console.log(
      "XRPL RESULT:"
    );

    console.log(result);

    // SOCKET EVENT
    global.io.emit(
      "newTransaction",
      {

        hash:
          result.result.hash,

        amount,

        recipient,

        status:
          "Confirmed",

        timestamp:
          new Date(),

      }
    );

    await client.disconnect();

    // UPDATED RESPONSE
    return res.json({

      success: true,

      hash:
        result.result.hash,

      tx:
        result.result,

    });

  } catch (error) {

    console.log(
      "FULL ERROR:"
    );

    console.log(error);

    if (error.data) {

      console.log(
        error.data
      );

    }

    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Transaction failed",

    });

  }

};

// GET BALANCE FUNCTION

export const getBalance =
async (req, res) => {

  try {

    const client =
      new xrpl.Client(
        "wss://s.altnet.rippletest.net:51233"
      );

    await client.connect();

    const response =
      await client.request({

        command:
          "account_info",

        account:
          process.env.XRPL_WALLET_ADDRESS,

      });

    const drops =
      response.result
        .account_data
        .Balance;

    const xrp =
      xrpl.dropsToXrp(drops);

    await client.disconnect();

    res.json({

      balance:
        xrp,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      error:
        "Failed to fetch balance",

    });

  }

};