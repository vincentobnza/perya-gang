"use client";

import { RaffleScrollModal } from "@/app/(user)/components/RaffleScrollModal";
import React from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";
import LiveComments from "@/app/(user)/components/LiveComments";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { User } from "lucide-react";

export default function StreamingVideo() {
  const isMobile = useMobile();
  const isTablet = useMobile(820);
  return (
    <div className="mt-5 md:mt-6 lg:mt-8 mb-12 w-full bg-zinc-950 relative">
      <div className="w-full max-w-screen-md mx-auto mb-8 flex justify-between items-center">
        <div className="flex items-center gap-x-6">
          <Avatar>
            <AvatarImage
              src="/avatar1.png"
              alt="User Avatar"
              className="w-10 h-10"
            />
          </Avatar>

          <div className="flex flex-col gap-1">
            <h1>AkosiDogie</h1>
            <p className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
              <span
                className="size-2 rounded-full bg-red-500 inline-block animate-pulse"
                aria-label="Live indicator"
              ></span>
              Live now
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <User className="size-4 text-zinc-500" strokeWidth={3} />

          <p className="text-sm font-semibold text-zinc-500 uppercase">
            100 Viewers
          </p>
        </div>
      </div>
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
          {/*  */}
        </div>
      </div>
      <div className="mt-10">
        <LiveComments />
      </div>
    </div>
  );
}
