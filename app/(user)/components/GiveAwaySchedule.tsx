import React from "react";
import GiveAwayCard from "./GiveAwayCard";

export default function GiveAwaySchedule() {
  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold">GiveAway Schedule</h1>
      <div className="w-full grid md:grid-cols-3 gap-4 mt-5">
        {GiveAwayScheduleDumps.map((giveAway, idx) => (
          <GiveAwayCard
            key={idx}
            counting={giveAway.counting}
            startTime={giveAway.startTime}
            endTime={giveAway.endTime}
            cashGiveAways={giveAway.cashGiveAways}
            entryRequirements={giveAway.entryRequirements}
          />
        ))}
      </div>
    </div>
  );
}
const GiveAwayScheduleDumps = [
  {
    counting: 100,
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    cashGiveAways: "₱5,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱1000  on any of our casino games.",
  },
  {
    counting: 200,
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    cashGiveAways: "₱10,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱5000  on any of our casino games.",
  },
  {
    counting: 300,
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    cashGiveAways: "₱15,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱2000  on any of our casino games.",
  },
];
