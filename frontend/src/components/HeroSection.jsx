import { motion } from "framer-motion";

function HeroSection() {

  return (

    <div className="
      min-h-[70vh]
      max-w-7xl
      mx-auto
      px-6
      pt-20
      pb-16
      flex
      items-center
    ">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="
          inline-flex
          items-center
          gap-3
          px-6
          py-3
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          text-cyan-400
          mb-8
        ">

          <div className="
            w-3
            h-3
            rounded-full
            bg-cyan-400
            animate-pulse
          " />

          XRPL LIVE NETWORK

        </div>

        <h1 className="
          text-7xl
          md:text-8xl
          font-black
          leading-none
        ">

          Global

          <br />

          <span className="
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          ">
            Stablecoin
          </span>

          <br />

          Infrastructure

        </h1>

        <p className="
          mt-10
          text-2xl
          text-gray-400
          max-w-4xl
          leading-relaxed
        ">

          Real-time blockchain remittance powered by XRP Ledger
          with instant settlement verification and transparent
          global payments.

        </p>

      </motion.div>

    </div>

  );

}

export default HeroSection;