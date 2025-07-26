"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Clock, Gift } from "lucide-react";
import { useRouter } from "next/navigation";
import { ParticipantsTooltip } from "@/components/ui/participants-tooltip";
import { EditEventDialogModal } from "./EditEventModal";

type Reward = {
  id: string;
  name: string;
  status: string;
  userid: string;
  claim_status: string;
  username: string;
};

type GiveAwayCardProps = {
  id: string;
  title?: string;
  startTime?: string;
  endTime?: string;
  rewards?: Reward[];
  entryRequirements?: string;
  min_deposit?: number;
  description?: string;
  updateEvent: any;
  isUpdatingEvent?: boolean;
};

export default function EventCard({
  id,
  title,
  startTime,
  endTime,
  rewards,
  entryRequirements,
  min_deposit,
  description,
  isUpdatingEvent,
  updateEvent,
}: GiveAwayCardProps) {
  const router = useRouter();

  const event = {
    event_id: id,
    event_title: title || "",
    event_description: description || "",
    start_date: startTime || "",
    end_date: endTime || "",
    min_deposit: min_deposit || 0,
    rewards: rewards || [],
  };

  function formatEventDateTime(start: string, end: string): string {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const dateStr = startDate.toLocaleDateString("en-US", dateOptions);
    const startTimeStr = startDate.toLocaleTimeString("en-US", timeOptions);
    const endTimeStr = endDate.toLocaleTimeString("en-US", timeOptions);

    return `${dateStr} | ${startTimeStr} - ${endTimeStr}`;
  }

  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl h-[420px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-zinc-800">
        <h1 className="text-lg font-medium text-zinc-300 truncate">{title}</h1>
        <div className="flex items-center gap-2">
          <EditEventDialogModal
            event={event}
            isSaving={isUpdatingEvent}
            onSave={updateEvent}
          />
          <Button
            className="bg-[#bdfc06] text-black text-md font-bold"
            onClick={() => router.push("/streamer/live")}
          >
            Start
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {entryRequirements && (
          <div className="p-5 bg-zinc-800/70 rounded-lg border border-zinc-700/50">
            <h3 className="text-sm font-semibold">Entry Requirements</h3>
            <p
              className="text-sm text-zinc-300 mt-4"
              dangerouslySetInnerHTML={{
                __html: entryRequirements.replace(
                  /(₱\d{1,10}(?:,\d{3})*)/,
                  '<span style="color: #ccff00; font-weight: bold;">$1</span>'
                ),
              }}
            />
          </div>
        )}

        <div>
          <h1 className="text-md opacity-70 font-semibold mb-2">Participants</h1>
          <ParticipantsTooltip size="size-8" />
        </div>

        <div className="space-y-3">
          {/* Date & Time */}
          <div className="flex items-center gap-x-6">
            <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
              <Clock className="size-4" />
            </div>
            <h3 className="text-md font-medium text-[#954af8]">
              {formatEventDateTime(startTime || "", endTime || "")}
            </h3>
          </div>

          {/* Rewards */}
          <div className="flex items-start gap-x-6">
            <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
              <Gift className="size-4" />
            </div>
            <div>
              {rewards && rewards.length > 0 ? (
                <ul className="space-y-1">
                  {rewards.map((r) => (
                    <li key={r.id} className="text-md font-medium text-zinc-300">
                      🎁 {r.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <h3 className="text-md font-medium text-zinc-300">
                  ₱0 GCash + No Mystery Box
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
