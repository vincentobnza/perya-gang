"use client";

import StreamingVideo from "@/components/Streaming-video";
import React from "react";
import GiveAwaySchedule from "../components/GiveAwaySchedule";
import Leaderboard from "@/components/Leaderboard";
import Heading from "@/components/Heading";
import { LeaderboardTable } from "@/components/ui/leaderboard-table";
import RaffleModal from "../components/RaffleModal";
import StreamingVideoDesktop from "../components/StreamingVideoDesktop";

export default function Portal() {
  return (
    <div>
      <StreamingVideoDesktop />
      <div className="space-y-10">
        <main className="w-full flex flex-col items-start max-w-screen-xl mx-auto">
          <GiveAwaySchedule />
          {/* LEADERBOARD */}
          <div className="flex flex-col items-start w-full p-5">
            <Heading
              topText="🏆 Top  Leaderboard"
              title="Grind. Get Rewarded."
              description="Join our exclusive streamer giveaways and get the chance to win epic rewards from merch, supplements, to surprise loot drops!"
            />
            <div className="w-full mt-6">
              <LeaderboardTable />
            </div>
          </div>
        </main>

        {/* RAFFLE MODAL FOR USERS */}
        <RaffleModal />
      </div>
    </div>
  );
}
