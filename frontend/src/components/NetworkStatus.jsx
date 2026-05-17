function NetworkStatus() {

  return (

    <div className="
      mt-14
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
    ">

      <div className="
        bg-[#111827]
        rounded-3xl
        p-6
      ">

        <h3 className="text-gray-400">
          XRPL Ping
        </h3>

        <div className="
          text-5xl
          font-black
          mt-4
          text-cyan-400
        ">
          23ms
        </div>

      </div>

      <div className="
        bg-[#111827]
        rounded-3xl
        p-6
      ">

        <h3 className="text-gray-400">
          API Uptime
        </h3>

        <div className="
          text-5xl
          font-black
          mt-4
          text-green-400
        ">
          99.99%
        </div>

      </div>

      <div className="
        bg-[#111827]
        rounded-3xl
        p-6
      ">

        <h3 className="text-gray-400">
          Nodes Connected
        </h3>

        <div className="
          text-5xl
          font-black
          mt-4
          text-white
        ">
          142
        </div>

      </div>

    </div>
  );
}

export default NetworkStatus;