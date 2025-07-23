import React from "react";
import { DateSegmentControlTabs } from "../components/DateSegmentControlTabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Page({}) {
  const rewards = null; // This should be replaced with actual data fetching logic
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <DateSegmentControlTabs />
        {rewards !== null ? (
          <Button size="lg" className="bg-main rounded-full py-3 px-8">
            Create Event
            <Plus />
          </Button>
        ) : (
          ""
        )}
      </div>
      <main className="w-full min-h-[70vh] flex justify-center items-center">
        {/* IF NO REWARDS CREATED */}
        {rewards === null && <NoRewardsCreated />}
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
