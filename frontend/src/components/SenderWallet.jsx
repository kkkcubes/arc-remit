import { useEffect, useState } from "react";
import axios from "axios";

function SenderWallet() {

  const [balance, setBalance] =
    useState("0");

  useEffect(() => {

    const fetchBalance = async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/balance"
          );

        setBalance(
          response.data.balance
        );

      } catch (err) {
        console.log(err);
      }

    };

    fetchBalance();

    const interval =
      setInterval(fetchBalance, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="
      glass-card
      p-10
      rounded-3xl
      mt-10
    ">

      <div className="
        flex
        justify-between
      ">

        <div>

          <div className="text-gray-400">
            Sender Wallet
          </div>

          <div className="
            text-4xl
            font-black
            mt-3
          ">
            {balance} XRP
          </div>

        </div>

        <div className="
          bg-green-500/20
          text-green-400
          px-5
          py-2
          rounded-2xl
          h-fit
        ">
          Active
        </div>

      </div>

    </div>
  );
}

export default SenderWallet;