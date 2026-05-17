import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

import { useEffect, useState } from "react";
import socket from "../services/socket";

function RealtimeCharts() {

  const [chartData, setChartData] =
    useState([]);

  useEffect(() => {

    socket.on(
      "ledgerUpdate",
      (data) => {

        setChartData((prev) => [

          ...prev.slice(-15),

          {
            ledger:
              data.ledgerIndex,

            tx:
              data.txCount,

            volume:
              Number(
                data.paymentVolume
              ),

            speed:
              Number(
                data.settlementSpeed
              ),

          },

        ]);

      }
    );

    return () => {
      socket.off("ledgerUpdate");
    };

  }, []);

  return (

    <div className="
      grid
      md:grid-cols-2
      gap-8
      mt-16
    ">

      {/* TPS */}

      <div className="
        glass-card
        rounded-3xl
        p-8
      ">

        <h2 className="
          text-3xl
          font-bold
          mb-6
        ">
          TPS Graph
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart
            data={chartData}
          >

            <CartesianGrid
              stroke="#1e293b"
            />

            <XAxis dataKey="ledger" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tx"
              stroke="#00d4ff"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* VOLUME */}

      <div className="
        glass-card
        rounded-3xl
        p-8
      ">

        <h2 className="
          text-3xl
          font-bold
          mb-6
        ">
          Payment Volume
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <AreaChart
            data={chartData}
          >

            <CartesianGrid
              stroke="#1e293b"
            />

            <XAxis dataKey="ledger" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="volume"
              stroke="#00ff88"
              fill="#00ff88"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RealtimeCharts;