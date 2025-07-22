import StreamingVideo from "@/components/Streaming-video";
import React from "react";
import GiveAwaySchedule from "./components/GiveAwaySchedule";

export default function Portal() {
  return (
    <div className="space-y-10">
      <StreamingVideo />
      <main className="w-full flex-1 flex flex-col items-start max-w-screen-xl mx-auto ">
        <GiveAwaySchedule />
      </main>
    </div>
  );
}
