import { motion } from "framer-motion";

import { useState } from "react";

import axios from "axios";

import TransactionStatus
from "./TransactionStatus";

function SendMoney() {

  const [recipient, setRecipient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // NEW STATES
  const [txHash, setTxHash] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const handleSend = async () => {

    try {

      setLoading(true);

      const response =
        await axios.post(

          "http://localhost:5000/api/send",

          {

            recipient:
              recipient.trim(),

            amount,

          }
        );

      console.log(response.data);

      if (response.data.success) {

        // ADDED
        setTxHash(
          response.data.hash
        );

        setShowModal(true);

        alert(
          "Transaction Successful!"
        );

        window.open(
          response.data.explorer,
          "_blank"
        );

      } else {

        alert(
          "Transaction Failed"
        );

      }

    } catch (error) {

      console.log(error);

      alert(
        "Transaction Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-white/10
        backdrop-blur-lg
        border border-white/10
        p-8
        rounded-3xl
        shadow-2xl
        mt-10
      "
    >

      <h2 className="text-3xl font-bold mb-8">
        Send Money
      </h2>

      <div className="mb-5">

        <label className="block mb-2 text-gray-300">
          Recipient Wallet
        </label>

        <input
          type="text"
          placeholder="Enter wallet address"
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900
            border border-slate-700
            text-white
            outline-none
            focus:border-cyan-400
          "
          onChange={(e) =>
            setRecipient(e.target.value)
          }
        />

      </div>

      <div className="mb-6">

        <label className="block mb-2 text-gray-300">
          Amount
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          className="
            w-full
            p-4
            rounded-xl
            bg-slate-900
            border border-slate-700
            text-white
            outline-none
            focus:border-cyan-400
          "
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

      </div>

      <button
        onClick={handleSend}
        disabled={loading}
        className="
          w-full
          bg-gradient-to-r
          from-emerald-400
          to-green-500
          hover:scale-[1.02]
          active:scale-[0.98]
          transition-all
          duration-300
          text-white
          font-bold
          py-6
          rounded-2xl
          text-2xl
          shadow-[0_0_40px_rgba(0,255,150,0.25)]
        "
      >

        {loading
          ? "Processing Blockchain Transaction..."
          : "Send Payment"}

      </button>

      {/* TRANSACTION STATUS */}
      <TransactionStatus />

      {/* TRANSACTION MODAL */}

      {showModal && (

        <div
          className="
            mt-6
            p-5
            rounded-2xl
            bg-emerald-500/10
            border border-emerald-400/30
          "
        >

          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Transaction Successful
          </h3>

          <p className="text-gray-300 break-all">
            TX Hash:
          </p>

          <p className="text-sm text-white break-all mt-2">
            {txHash}
          </p>

        </div>

      )}

    </motion.div>

  );

}

export default SendMoney;