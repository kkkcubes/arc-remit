import Navbar from "../components/Navbar";
import EventTicker from "../components/EventTicker";
import HeroSection from "../components/HeroSection";
import MetricsGrid from "../components/MetricsGrid";
import SenderWallet from "../components/SenderWallet";
import SystemStatus from "../components/SystemStatus";
import SendMoney from "../components/SendMoney";
import LiveActivity from "../components/LiveActivity";
import RecentTransactions from "../components/RecentTransactions";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import RealtimeCharts from "../components/RealtimeCharts";

function Home() {

  return (

    <div
      className="
        bg-[#020617]
        text-white
        min-h-screen
      "
    >

      <Navbar />

      <EventTicker />

      <HeroSection />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >

        {/* DASHBOARD */}

        <section
          id="dashboard"
          className="scroll-mt-32"
        >

          <MetricsGrid />

          <SenderWallet />

          <SystemStatus />

        </section>

        {/* TRANSACTIONS */}

        <section
          id="transactions"
          className="
            mt-16
            scroll-mt-32
          "
        >

          <SendMoney />

          <LiveActivity />

          <RecentTransactions />

        </section>

        {/* ANALYTICS */}

        <section
          id="analytics"
          className="
            mt-16
            scroll-mt-32
          "
        >

          <AnalyticsDashboard />

          <RealtimeCharts />

        </section>

      </div>

    </div>
  );
}

export default Home;