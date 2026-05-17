function Navbar() {

  return (

    <nav
      className="
        sticky
        top-0
        z-50
        bg-[#020617]/90
        backdrop-blur-xl
        border-b
        border-cyan-500/20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          justify-between
          items-center
        "
      >

        {/* LOGO */}

        <div>

          <h1
            className="
              text-6xl
              font-black
              text-cyan-400
              leading-none
            "
          >
            ArcRemit
          </h1>

          <p
            className="
              text-gray-400
              text-xl
            "
          >
            Ripple-Powered Global Settlement
          </p>

        </div>

        {/* NAVIGATION */}

        <div
          className="
            flex
            items-center
            gap-10
            text-xl
          "
        >

          <a
            href="#dashboard"
            className="
              hover:text-cyan-400
              transition
            "
          >
            Dashboard
          </a>

          <a
            href="#transactions"
            className="
              hover:text-cyan-400
              transition
            "
          >
            Transactions
          </a>

          <a
            href="#analytics"
            className="
              hover:text-cyan-400
              transition
            "
          >
            Analytics
          </a>

          <a
            href="https://livenet.xrpl.org/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
            "
          >
            XRPL
          </a>

          <div
            className="
              bg-green-500/10
              border
              border-green-500/20
              px-8
              py-4
              rounded-2xl
              text-green-300
              font-bold
            "
          >

            <span className="mr-3">
              ●
            </span>

            XRPL Connected

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;