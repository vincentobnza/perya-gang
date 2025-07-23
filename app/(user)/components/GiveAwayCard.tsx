import React from "react";
import { Clock, Gift } from "lucide-react";
import { RaffleMechanicsModal } from "./RaffleMechanicsModal";
import { ParticipantsTooltip } from "@/components/ui/participants-tooltip";
import { Separator } from "@/components/ui/separator";

type GiveAwayCardProps = {
  counting: number;
  startTime?: string;
  endTime?: string;
  cashGiveAways?: string;
  entryRequirements?: string;
  isJoined?: boolean;
};

export default function GiveAwayCard({
  counting,
  startTime,
  endTime,
  cashGiveAways,
  entryRequirements,
}: GiveAwayCardProps) {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
      <div className="w-full flex items-center justify-between p-5 border-b border-zinc-800">
        <h4 className="text-sm font-medium text-zinc-400">
          {counting} And Counting!
        </h4>
        <RaffleMechanicsModal />
      </div>

      <div className="p-5">
        {entryRequirements && (
          <div className="w-full p-5 bg-zinc-800/70 rounded-lg border border-zinc-700/50 mb-5">
            <h3 className="text-sm font-medium">Entry Requirements</h3>
            <p className="text-sm text-zinc-300 mt-4">
              <span
                dangerouslySetInnerHTML={{
                  __html: entryRequirements.replace(
                    /(₱\d{1,10}(?:,\d{3})*)/,
                    '<span style="color: #ccff00; font-weight: bold;">$1</span>'
                  ),
                }}
              />
            </p>
          </div>
        )}

        <div className="flex justify-center items-start space-y-2 mb-8 flex-col">
          <h1 className="text-md opacity-70 font-medium">Participants</h1>
          <div className="flex space-x-7">
            <div>
              <ParticipantsTooltip size="size-8" />
            </div>
            <div className="border-l-2 border-zinc-700 pl-3 flex items-center">
              {counting > 100 ? (
                <h3 className="text-lg font-semibold text-zinc-600">
                  {counting} +
                </h3>
              ) : (
                <h3 className="text-lg font-semibold text-zinc-600">
                  {counting}
                </h3>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-x-6">
            <div className="p-1.5  rounded-lg bg-zinc-800 text-zinc-300">
              <Clock className="size-4" />
            </div>
            <h3 className="text-md font-medium text-[#954af8]">
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
        </div>
      </div>
    </div>
  );
}
