function SystemStatus() {
  return (
    <div
      className="
        grid
        md:grid-cols-4
        gap-5
        mt-10
      "
    >
      <div
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5
        "
      >
        <p className="text-gray-400">
          XRPL Network
        </p>

        <div className="flex items-center gap-3 mt-3">
          <div
            className="
              h-3
              w-3
              bg-green-400
              rounded-full
              animate-pulse
            "
          />

          <h2 className="text-2xl font-bold">
            Online
          </h2>
        </div>
      </div>

      <div
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5
        "
      >
        <p className="text-gray-400">
          Settlement Speed
        </p>

        <h2 className="text-2xl font-bold mt-3">
          ~3-5s
        </h2>
      </div>

      <div
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5
        "
      >
        <p className="text-gray-400">
          Transaction Fees
        </p>

        <h2 className="text-2xl font-bold mt-3">
          {"<"} $0.01
        </h2>
      </div>

      <div
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5
        "
      >
        <p className="text-gray-400">
          Blockchain Status
        </p>

        <h2
          className="
            text-2xl
            font-bold
            mt-3
            text-green-400
          "
        >
          Verified
        </h2>
      </div>
    </div>
  );
}

export default SystemStatus;