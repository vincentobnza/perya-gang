import React from "react";
import { ArrowUpRight, Clock, Gift } from "lucide-react";
import { RaffleMechanicsModal } from "./RaffleMechanicsModal";
import { ParticipantsTooltip } from "@/components/ui/participants-tooltip";
import { ViewAllModal } from "./ViewAllModal";

type GiveAwayCardProps = {
  title: string;
  counting: number;
  startTime?: string;
  endTime?: string;
  cashGiveAways?: string;
  entryRequirements?: string;
  isJoined?: boolean;
};

export default function GiveAwayCard({
  title,
  counting,
  startTime,
  endTime,
  cashGiveAways,
  entryRequirements,
  isJoined = true,
}: GiveAwayCardProps) {
  return (
    <div className="w-full rounded-2xl bg-zinc-900/50 border border-zinc-800/70 shadow-xl">
      <div className="w-full flex items-center justify-between p-5 border-b border-zinc-800">
        <h1 className="text-lg font-medium text-zinc-300">{title}</h1>
        {isJoined ? (
          <button className="opacity-80 rounded-full px-4 h-9 border border-zinc-800 bg-zinc-800/50 cursor-pointer text-zinc-400  mr-2  transition-opacity flex items-center gap-x-2 hover:opacity-80 text-sm">
            Joined
          </button>
        ) : (
          <RaffleMechanicsModal />
        )}
      </div>
      <div className="p-5">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-start space-y-2 mb-8 flex-col">
            <h1 className="text-md opacity-70 font-medium">Participants</h1>
            <div className="flex space-x-7">
              <div>
                <ParticipantsTooltip size="size-8" />
              </div>
            </div>
          </div>
          <ViewAllModal />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-x-6">
            <div className="p-1.5  rounded-lg bg-zinc-800 text-zinc-300">
              <Clock className="size-4" />
            </div>
            <h3 className="text-md font-medium text-[#a45eff]">
              {startTime} - {endTime}
            </h3>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="p-1.5  rounded-lg bg-zinc-800 text-zinc-300">
              <Gift className="size-4" />
            </div>
            <h3 className="text-md font-medium text-zinc-300">
              {cashGiveAways || "₱0 GCash + No Mystery Box"}
            </h3>
          </div>

          {entryRequirements && (
            <div className="mt-6 w-full p-5 bg-gradient-to-bl from-[#212121]/10 to-[#212121]/50 rounded-lg border border-zinc-700/20 mb-5">
              <h3 className="text-sm font-medium">Entry Requirements</h3>
              <p className="text-sm text-zinc-600 mt-4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: entryRequirements.replace(
                      /(₱\d{1,10}(?:,\d{3})*)/,
                      '<span style="color: #ccff00; font-weight: semibold;">$1</span>'
                    ),
                  }}
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
