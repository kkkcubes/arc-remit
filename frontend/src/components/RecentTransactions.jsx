import { useEffect, useState } from "react";

// Import socket service
import socket from "../services/socket";

function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    socket.on("newTransaction", (data) => {
      setTransactions((prev) => [
        data,
        ...prev.slice(0, 4),
      ]);
    });

    return () => {
      socket.off("newTransaction");
    };
  }, []);

  return (
    <div className="mt-14 mb-20">
      <div
        className="
          bg-[#111827]
          border
          border-cyan-500/10
          rounded-3xl
          p-8
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
            mb-8
          "
        >
          <div>
            <h2
              className="
                text-5xl
                font-black
                leading-none
              "
            >
              Recent Transactions
            </h2>

            <p
              className="
                text-gray-400
                mt-2
              "
            >
              Live XRPL settlement feed
            </p>
          </div>

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-cyan-500/20
              text-cyan-300
              text-sm
              font-semibold
            "
          >
            LIVE
          </div>
        </div>

        <div
          className="
            space-y-4
            max-h-[500px]
            overflow-y-auto
            pr-2
          "
        >
          {transactions.length === 0 && (
            <div
              className="
                text-gray-500
                text-lg
                py-10
                text-center
              "
            >
              Waiting for transactions...
            </div>
          )}

          {transactions.map((tx, i) => (
            <div
              key={i}
              className="
                bg-[#0B122B]
                rounded-2xl
                p-5
                border
                border-cyan-500/10
                hover:border-cyan-400/30
                transition
              "
            >
              <div
                className="
                  flex
                  justify-between
                  items-center
                  flex-wrap
                  gap-4
                "
              >
                <div>
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-cyan-400
                    "
                  >
                    {tx.amount} XRP
                  </h3>

                  <p
                    className="
                      text-gray-400
                      mt-2
                      text-sm
                      break-all
                    "
                  >
                    To: {tx.recipient}
                  </p>

                  <a
                    href={`https://testnet.xrpl.org/transactions/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-cyan-300
                      mt-3
                      inline-block
                      text-sm
                      hover:text-cyan-200
                    "
                  >
                    View on XRPL Explorer
                  </a>
                </div>

                <div className="text-right">
                  <div
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-green-500/10
                      text-green-400
                      font-bold
                    "
                  >
                    Confirmed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;