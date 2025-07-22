import { RaffleScrollModal } from "@/app/portal/components/RaffleScrollModal";
import React from "react";

export default function StreamingVideo() {
  return (
    <div className="w-full min-h-[80vh] bg-zinc-900/20 relative">
      <RaffleScrollModal />
      {/* SAMPLE VIDEO */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/HfGnW_7JaTY?si=Y4bvYZl_CTHHahnV&autoplay=1&mute=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
