function EventTicker() {

  return (

    <div
      className="
        w-full
        border-y
        border-cyan-500/20
        bg-[#031225]
        overflow-hidden
      "
    >

      <marquee
        behavior="scroll"
        direction="left"
        className="
          py-4
          text-cyan-300
          font-semibold
          text-center
        "
      >
        LIVE XRPL NETWORK •
        INSTANT SETTLEMENTS •
        REAL-TIME BLOCKCHAIN
        VERIFICATION •
        GLOBAL PAYMENTS ACTIVE
      </marquee>

    </div>
  );
}

export default EventTicker;