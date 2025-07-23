import React from "react";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, idx) => (
        <EventCard
          key={idx}
          counting={event.counting}
          startTime={event.startTime}
          endTime={event.endTime}
          cashGiveAways={event.cashGiveAways}
          entryRequirements={event.entryRequirements}
        />
      ))}
    </div>
  );
}

// Sample data for events
const events = [
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
