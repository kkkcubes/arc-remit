import { useEffect, useState } from "react";
import socket from "../services/socket";

function LiveActivity() {

  const [activities, setActivities] =
    useState([]);

  useEffect(() => {

    socket.on(
      "ledgerUpdate",
      (data) => {

        const newActivities = [

          `Ledger ${data.ledgerIndex} validated`,

          `${data.txCount} transactions processed`,

          `${data.paymentVolume} XRP settled`,

          `Settlement speed ${data.settlementSpeed}s`,

        ];

        setActivities(newActivities);

      }
    );

    return () => {
      socket.off("ledgerUpdate");
    };

  }, []);

  return (

    <div className="mt-20">

      <h1 className="
        text-5xl
        font-black
        mb-10
      ">
        Live Activity
      </h1>

      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">

        {activities.map(
          (activity, index) => (

          <div
            key={index}
            className="
              glass-card
              rounded-3xl
              p-8
              flex
              items-center
              gap-5
            "
          >

            <div className="
              w-4
              h-4
              bg-green-400
              rounded-full
              animate-pulse
            " />

            <div className="
              text-2xl
            ">
              {activity}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LiveActivity;