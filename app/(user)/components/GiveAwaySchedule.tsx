import React from "react";
import GiveAwayCard from "./GiveAwayCard";
import Progress from "./Progress";
import WeeklyProgress from "./Progress";

export default function GiveAwaySchedule() {
  return (
    <div className=" mt-16 w-full">
      <h1 className="text-2xl font-bold mb-5">GiveAway Schedule</h1>
      <WeeklyProgress />
      <div className="w-full grid md:grid-cols-3 gap-4 mt-4 ">
        {GiveAwayScheduleDumps.map((giveAway, idx) => (
          <GiveAwayCard
            title={giveAway.title}
            key={idx}
            counting={giveAway.counting}
            startTime={giveAway.startTime}
            endTime={giveAway.endTime}
            cashGiveAways={giveAway.cashGiveAways}
            entryRequirements={giveAway.entryRequirements}
            isJoined={giveAway.isJoined}
          />
        ))}
      </div>
    </div>
  );
}
const GiveAwayScheduleDumps = [
  {
    title: "Surprise Box Showdown",
    counting: 100,
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    cashGiveAways: "₱5,000 GCash + Surprise Mystery Box",
    isJoined: true,
  },
  {
    title: "Mystery Box Mega Hour",
    counting: 200,
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    cashGiveAways: "₱10,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱5000  on any of our casino games.",
    isJoined: false,
  },
  {
    title: "Golden Hour Raffle",
    counting: 300,
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    cashGiveAways: "₱15,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱2000  on any of our casino games.",
    isJoined: true,
  },
  {
    title: "Raffle Royale",
    counting: 100,
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    cashGiveAways: "₱5,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱5000  on any of our casino games.",
    isJoined: true,
  },
  {
    title: "Lucky ₱2K Roll",
    counting: 200,
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    cashGiveAways: "₱10,000 GCash + Surprise Mystery Box",
    isJoined: false,
  },
  {
    title: "GCash Grand Giveaway ",
    counting: 300,
    startTime: "3:00 PM",
    endTime: "4:00 PM",
    cashGiveAways: "₱15,000 GCash + Surprise Mystery Box",
    entryRequirements:
      "To qualify for the giveaway, just cash in at least ₱2000  on any of our casino games.",
    isJoined: false,
  },
];
