import RaffleSpinnerModal from "@/app/(streamer)/components/RaffleSpinner";

import { Gift } from "lucide-react";
import React from "react";
import DeleteEventModal from "./DeleteEventModal";

export default function RewardCard({ rewardName }: { rewardName: string }) {
  return (
    <div className="w-full p-4 bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-between rounded-xl">
      <div className="flex items-center gap-4">
        <div className="p-1 rounded-full bg-zinc-800">
          <Gift className="size-5 text-purple-500" />
        </div>
        <p className="text-xs md:text-[16px] font-medium opacity-70">
          {rewardName}
        </p>
      </div>
      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4">
        <RaffleSpinnerModal />
        <DeleteEventModal />
      </div>
    </div>
  );
}
