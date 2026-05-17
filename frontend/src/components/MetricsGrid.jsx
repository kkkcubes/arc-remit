import { useEffect, useState } from "react";
import socket from "../services/socket";

function MetricsGrid() {

  const [ledger, setLedger] =
    useState(0);

  const [txCount, setTxCount] =
    useState(0);

  const [speed, setSpeed] =
    useState("0");

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

        setSpeed(
          data.settlementSpeed
        );

      }
    );

    return () => {
      socket.off("ledgerUpdate");
    };

  }, []);

  const cards = [

    {
      title:
        "Settlement Speed",

      value:
        `${speed}s`,
    },

    {
      title:
        "Transactions",

      value:
        txCount,
    },

    {
      title:
        "Validated Ledger",

      value:
        ledger,
    },

    {
      title:
        "Blockchain Status",

      value:
        "Verified",

      green: true,
    },

  ];

  return (

    <div className="
      grid
      md:grid-cols-4
      gap-6
      mt-16
    ">

      {cards.map((card, index) => (

        <div
          key={index}
          className="
            glass-card
            rounded-3xl
            p-10
          "
        >

          <div className="
            text-gray-400
            text-xl
          ">
            {card.title}
          </div>

          <div className={`
            text-5xl
            font-black
            mt-6
            ${card.green
              ? "text-green-400"
              : "text-white"}
          `}>

            {card.value}

          </div>

        </div>

      ))}

    </div>
  );
}

export default MetricsGrid;