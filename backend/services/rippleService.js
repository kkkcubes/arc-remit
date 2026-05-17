import xrpl from "xrpl";

export const sendXRP = async (
  recipient,
  amount
) => {
  try {
    const client = new xrpl.Client(
      "wss://s.altnet.rippletest.net:51233"
    );

    await client.connect();

    const wallet = xrpl.Wallet.fromSeed(
      process.env.XRP_SECRET
    );

    const tx = {
      TransactionType: "Payment",
      Account: wallet.address,
      Amount: xrpl.xrpToDrops(amount),
      Destination: recipient,
    };

    const prepared =
      await client.autofill(tx);

    const signed =
      wallet.sign(prepared);

    const result =
      await client.submitAndWait(
        signed.tx_blob
      );

    console.log(result);

    await client.disconnect();

    return {
      success: true,
      hash: result.result.hash,
      explorer:
        `https://testnet.xrpl.org/transactions/${signed.hash}`,
    };
  } catch (error) {
    console.log("XRPL ERROR:");
    console.log(error);

    return {
      success: false,
      error,
    };
  }
};