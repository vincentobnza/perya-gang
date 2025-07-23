"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Clock, Gift } from "lucide-react";
import { useRouter } from "next/navigation";

type GiveAwayCardProps = {
  counting: number;
  startTime?: string;
  endTime?: string;
  cashGiveAways?: string;
  entryRequirements?: string;
  isJoined?: boolean;
};

export default function EventCard({
  counting,
  startTime,
  endTime,
  cashGiveAways,
  entryRequirements,
}: GiveAwayCardProps) {
  const router = useRouter(); // Assuming you have a router instance available
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
      <div className="w-full flex items-center justify-between p-5 border-b border-zinc-800">
        <h4 className="text-sm font-medium text-zinc-400">
          {counting} And Counting!
        </h4>

        <div className="flex items-center gap-2">
          <Button className="text-md font-bold bg-zinc-800">Edit</Button>
          <Button
            className="bg-[#bdfc06] text-black text-md font-bold"
            onClick={() => {
              router.push("/streamer/live"); // Assuming you have a router instance available
            }}
          >
            Start
          </Button>
        </div>
      </div>
      <div className="p-5">
        {entryRequirements && (
          <div className="w-full p-5 bg-zinc-800/70 rounded-lg border border-zinc-700/50 mb-8">
            <h3 className="text-sm font-semibold">Entry Requirements</h3>
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
