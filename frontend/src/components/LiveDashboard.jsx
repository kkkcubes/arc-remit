import { useEffect, useState } from "react";
import axios from "axios";

function LiveDashboard() {
  const [balance, setBalance] =
    useState("0");

  const [network, setNetwork] =
    useState(null);

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const balanceResponse =
        await axios.get(
          "http://localhost:5000/xrpl/balance"
        );

      setBalance(
        balanceResponse.data.balance
      );

      const networkResponse =
        await axios.get(
          "http://localhost:5000/xrpl/network"
        );

      setNetwork(networkResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
        grid
        md:grid-cols-3
        gap-5
        mt-10
      "
    >
      <div
        className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
        "
      >
        <p className="text-gray-400">
          Sender Wallet Balance
        </p>

        <h2
          className="
            text-4xl
            font-black
            mt-4
            text-cyan-400
          "
        >
          {balance} XRP
        </h2>
      </div>

      <div
        className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
        "
      >
        <p className="text-gray-400">
          Validated Ledger
        </p>

        <h2
          className="
            text-4xl
            font-black
            mt-4
          "
        >
          {network?.validatedLedger}
        </h2>
      </div>

      <div
        className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
        "
      >
        <p className="text-gray-400">
          XRPL Network
        </p>

        <div className="flex items-center gap-3 mt-5">
          <div
            className="
              h-3
              w-3
              bg-green-400
              rounded-full
              animate-pulse
            "
          />

          <h2
            className="
              text-3xl
              font-black
              text-green-400
            "
          >
            LIVE
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LiveDashboard;