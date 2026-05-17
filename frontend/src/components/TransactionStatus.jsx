import { motion }
from "framer-motion";

function TransactionStatus({
  transaction,
}) {
  if (!transaction) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        mt-8
        bg-slate-900
        border border-green-500/30
        rounded-2xl
        p-6
      "
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="
            h-3
            w-3
            bg-green-400
            rounded-full
          "
        />

        <h2 className="text-2xl font-bold">
          Blockchain Proof
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400">
            Transaction Hash
          </p>

          <p className="break-all text-cyan-300">
            {transaction.hash}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Recipient
          </p>

          <p className="break-all">
            {transaction.recipient}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Amount
          </p>

          <p>
            {transaction.amount} XRP
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Blockchain Status
          </p>

          <div
            className="
              inline-block
              bg-green-500/20
              text-green-300
              px-4
              py-2
              rounded-lg
              mt-2
            "
          >
            Confirmed On XRPL
          </div>
        </div>

        <a
          href={transaction.explorer}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-4
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            font-bold
            hover:scale-105
            transition
          "
        >
          Verify On Explorer
        </a>
      </div>
    </motion.div>
  );
}

export default TransactionStatus;