"use client";

import { RaffleScrollModal } from "@/app/(user)/components/RaffleScrollModal";
import React from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";
import LiveComments from "@/app/(user)/components/LiveComments";

export default function StreamingVideo() {
  const isMobile = useMobile();
  const isTablet = useMobile(820);
  return (
    <div className="mt-5 md:mt-6 lg:mt-8 mb-12 w-full bg-zinc-900/20 relative">
      <RaffleScrollModal />
      {/* SAMPLE VIDEO */}
      <div className="flex justify-center items-center w-full">
        <div className="mt-5 max-w-screen-xl aspect-square md:aspect-[4/4] lg:aspect-video relative rounded-2xl w-full flex justify-center items-center">
          <Image
            src="/streaming-frame.png"
            alt="Streaming Frame"
            width={isMobile ? 240 : isTablet ? 900 : 775}
            height={isMobile ? 240 : isTablet ? 900 : 775}
            className="absolute z-20 mx-auto"
          />
          <video
            className="absolute top-0 left-0 w-full h-full"
            src="/livestream.mp4"
            autoPlay
            controls={false}
            loop
          />

          {/* LIve comments */}
        </div>
      </div>
      <LiveComments />
    </div>
  );
}
