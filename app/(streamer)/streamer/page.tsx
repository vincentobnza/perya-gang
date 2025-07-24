'use client'
import React from "react";
import { DateSegmentControlTabs } from "../components/DateSegmentControlTabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Events from "../components/Events";
import { CreateEvent } from "../components/CreateEvent";

export default function Page({}) {

  const rewards = null; // This should be replaced with actual data fetching logic
  return (
    <div>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <DateSegmentControlTabs />
        {rewards !== null ? "" : <CreateEvent />}
      </div>
      <main className="w-full min-h-[70vh] flex justify-center items-center">
        {/* IF NO REWARDS CREATED AND IF CREATED */}
        {rewards !== null ? <NoRewardsCreated /> : <Events />}
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
