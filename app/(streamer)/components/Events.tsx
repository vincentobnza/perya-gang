import React from "react";
import EventCard from "./EventCard";

interface Reward {
  id: string;
  name: string;
  status: string;
  userid: string;
  claim_status: string;
  username: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  status: string;
  min_deposit: number;
  start_date: string;
  end_date: string;
  createdAt: string;
  updatedAt: string;
  rewards: Reward[];
}

export default function Events({
  events,
  updateEvent,
  isUpdatingEvent,
}: {
  events: Event[] | Record<string, Event>;
  updateEvent: any;
  isUpdatingEvent: boolean;
}) {
  if (!events) return null;

  const eventList: Event[] = Array.isArray(events)
    ? events
    : Object.values(events);

  return (
    <div className="mt-8 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {eventList.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          startTime={event.start_date}
          endTime={event.end_date}
          description={event.description}
          rewards={event.rewards} // ✅ Pass the full array
          min_deposit={event.min_deposit}
          entryRequirements={
            event.min_deposit
              ? `To qualify for the giveaway, just cash in at least ₱${event.min_deposit} on any of our casino games.`
              : ""
          }
          isUpdatingEvent={isUpdatingEvent}
          updateEvent={updateEvent}
        />
      ))}
    </div>
  );
}
