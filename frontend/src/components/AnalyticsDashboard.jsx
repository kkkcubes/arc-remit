import { useEffect, useState } from "react";
import socket from "../services/socket";
import CountUp from "react-countup";

function AnalyticsDashboard() {

  const [ledger, setLedger] =
    useState(0);

  const [txCount, setTxCount] =
    useState(0);

  const [volume, setVolume] =
    useState(0);

  useEffect(() => {

    socket.on(
      "ledgerUpdate",
      (data) => {

        setLedger(
          data.ledgerIndex
        );

        setTxCount(
          data.txCount
        );

        // UPDATED
        setVolume((prev) =>
          prev +
          Number(
            data.paymentVolume
          )
        );

      }
    );

    return () => {

      socket.off(
        "ledgerUpdate"
      );

    };

  }, []);

  return (

    <div>

      <h1 className="
        text-6xl
        font-black
        mb-10
      ">
        Analytics Dashboard
      </h1>

      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">

        {/* LEDGER */}

        <div className="
          glass-card
          rounded-3xl
          p-8
        ">

          <div className="
            text-gray-400
            text-xl
          ">
            Latest Ledger
          </div>

          <div className="
            text-5xl
            font-black
            text-cyan-400
            mt-4
          ">

            <CountUp
              end={ledger}
              duration={1}
            />

          </div>

        </div>

        {/* TX COUNT */}

        <div className="
          glass-card
          rounded-3xl
          p-8
        ">

          <div className="
            text-gray-400
            text-xl
          ">
            Transactions
          </div>

          <div className="
            text-5xl
            font-black
            text-green-400
            mt-4
          ">

            <CountUp
              end={txCount}
              duration={1}
            />

          </div>

        </div>

        {/* PAYMENT VOLUME */}

        <div className="
          glass-card
          rounded-3xl
          p-8
        ">

          <div className="
            text-gray-400
            text-xl
          ">
            XRP Volume
          </div>

          <div className="
            text-5xl
            font-black
            mt-4
          ">

            <CountUp
              end={volume}
              decimals={2}
              duration={1}
            />

          </div>

        </div>

      </div>

    </div>
  );

}

export default AnalyticsDashboard;