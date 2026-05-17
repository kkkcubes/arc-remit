import { motion } from "framer-motion";

function SuccessModal({
  hash,
  onClose,
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        scale: 0.8,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      className="
        fixed
        inset-0
        bg-black/70
        flex
        justify-center
        items-center
        z-50
      "
    >

      <div className="
        glass-card
        rounded-3xl
        p-12
        w-[500px]
        text-center
      ">

        <div className="
          text-7xl
          mb-6
        ">
          ✅
        </div>

        <h1 className="
          text-4xl
          font-black
          mb-4
        ">
          Payment Successful
        </h1>

        <p className="
          text-gray-400
          mb-8
        ">
          XRPL transaction verified
        </p>

        <a
          href={`https://testnet.xrpl.org/transactions/${hash}`}
          target="_blank"
        >
          View Transaction
        </a>

        <button
          onClick={onClose}
          className="
            w-full
            mt-8
            py-4
            rounded-2xl
            bg-cyan-500
            font-bold
          "
        >
          Close
        </button>

      </div>

    </motion.div>
  );
}

export default SuccessModal;