import xrpl from "xrpl";

const client = new xrpl.Client(
  "wss://s.altnet.rippletest.net:51233"
);

export const getWalletBalance =
  async (req, res) => {
    try {
      await client.connect();

      const response =
        await client.request({
          command: "account_info",
          account:
            "rP3qaNkQS2YghtXtyALCtpt9n32e3PuxDY",
          ledger_index: "validated",
        });

      const balance =
        xrpl.dropsToXrp(
          response.result.account_data
            .Balance
        );

      return res.json({
        success: true,
        balance,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
      });
    }
  };

export const getNetworkInfo =
  async (req, res) => {
    try {
      await client.connect();

      const response =
        await client.request({
          command: "server_info",
        });

      return res.json({
        success: true,
        validatedLedger:
          response.result.info
            .validated_ledger
            .seq,
        loadFactor:
          response.result.info
            .load_factor,
        completeLedgers:
          response.result.info
            .complete_ledgers,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
      });
    }
  };