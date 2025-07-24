import { RaffleScrollModal } from "@/app/(user)/components/RaffleScrollModal";
import React from "react";

export default function StreamingVideo() {
  return (
    <div className="w-full min-h-[80vh] bg-zinc-900/20 relative">
      <RaffleScrollModal />
      {/* SAMPLE VIDEO */}
      <div className="mt-5 max-w-screen-xl mx-auto aspect-video relative rounded-2xl overflow-hidden shadow-zinc-800  border border-zinc-800">
        <video
          className="absolute top-0 left-0 w-full h-full"
          src="/livestream.mp4"
          autoPlay
          muted
          controls={false}
          loop
        />
      </div>
    </div>
  );
}
