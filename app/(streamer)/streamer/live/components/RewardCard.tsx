import RaffleSpinnerModal from "@/app/(streamer)/components/RaffleSpinner";
import { RaffleScrollModal } from "@/app/(user)/components/RaffleScrollModal";
import { Button } from "@/components/ui/button";
import { Gift, Trash } from "lucide-react";
import React from "react";

export default function RewardCard({ rewardName }: { rewardName: string }) {
  return (
    <div className="w-full p-3 bg-zinc-900/80 border border-zinc-800 flex items-center justify-between rounded-xl">
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
        <Button className="bg-zinc-800 rounded-lg text-red-400 size-9">
          <Trash />
        </Button>
      </div>
    </div>
  );
}
