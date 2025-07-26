"use client";
import React, { useState } from "react";
import { DateSegmentControlTabs } from "../components/DateSegmentControlTabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Events from "../components/Events";
import { CreateEvent } from "../components/CreateEvent";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  GetAllEvents,
  CreateEvent as CreateEventApi,
  UpdateEvent
} from "@/app/api/streamer/event";

const { setToast } = require("@/lib/common");

export default function Page() {
  const queryClient = useQueryClient();
  const [selectedTab, setSelectedTab] = useState("today");

  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: GetAllEvents,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const { mutate: createEvent, isPending: isCreatingEvent } = useMutation({
    mutationFn: CreateEventApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      setToast(data.message, "success");
    },
  });

  const { mutate: updateEvent, isPending: isUpdatingEvent } = useMutation({
    mutationFn: UpdateEvent,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      setToast(data.message, "success");
    },
  });

  const eventList = Array.isArray(events) ? events : events ? Object.values(events) : [];


  const getFilteredEvents = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date: Date) =>
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const todayStr = formatDate(today);
    const tomorrowStr = formatDate(tomorrow);

    return eventList.filter((event) => {
      const eventDate = new Date(event.start_date);
      const eventStr = formatDate(eventDate);

      if (selectedTab === "today") {
        return eventStr === todayStr;
      }

      if (selectedTab === "tomorrow") {
        return eventStr === tomorrowStr;
      }

      if (selectedTab === "upcoming") {
        return eventStr !== todayStr && eventStr !== tomorrowStr;
      }

      return true;
    });
  };


  const filteredEvents = getFilteredEvents();
  const isEmpty = filteredEvents.length === 0;

  return (
    <div>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <DateSegmentControlTabs value={selectedTab} onChange={setSelectedTab} />

        {isEmpty && (
          <CreateEvent submitEvent={createEvent} isCreating={isCreatingEvent} />
        )}
      </div>

      <main className="w-full min-h-[70vh] flex justify-center items-center">
        {isEmpty ? (
          <NoRewardsCreated />
        ) : (
          <Events
            events={filteredEvents}
            updateEvent={updateEvent}
            isUpdatingEvent={isUpdatingEvent}
          />
        )}
      </main>
    </div>
  );
}

const NoRewardsCreated = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-8">No Rewards Added Yet</h2>
      <Button size="lg" className="bg-main rounded-full py-3 px-8">
        Create Event
        <Plus />
      </Button>
    </div>
  );
};
