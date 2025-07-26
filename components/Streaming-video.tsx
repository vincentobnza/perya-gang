"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { TvMinimalPlay } from "lucide-react";
import { LiveComments as LiveCommentsData } from "@/data/dummy-data";

// Responsive StreamingVideo Component
export default function StreamingVideoDesktop() {
  const isMobile = useMobile();
  const isTablet = useMobile(820);

  return (
    <div className="mt-3 md:mt-5 lg:mt-8 mb-6 md:mb-12 w-full bg-zinc-950 relative px-3 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <Header />

        {/* Main content area - responsive layout */}
        <div className="mt-3 md:mt-5 flex flex-col lg:flex-row gap-3 md:gap-4 items-start">
          {/* Video container - responsive width */}
          <div className="w-full lg:flex-1 relative">
            <div className="relative aspect-video rounded overflow-hidden bg-zinc-900/20 border border-zinc-900">
              {/* Video element */}
              <video
                className="absolute inset-0 w-full h-full "
                src="/livestream.mp4"
                autoPlay
                controls={false}
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Chat sidebar - responsive dimensions */}
          <div className="w-full lg:w-80 h-64 sm:h-80 md:h-96 lg:h-[532px]">
            <LiveComments />
          </div>
        </div>
      </div>
    </div>
  );
}

// Responsive LiveComments Component
function LiveComments() {
  const [comments, setComments] = useState(LiveCommentsData);
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setComments([
      ...comments,
      {
        id: `lc-${Date.now()}`,
        avatar: "/default-avatar.png",
        username: "You",
        comment: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="w-full h-full bg-zinc-900/50 rounded backdrop-blur-sm border border-zinc-800 flex flex-col">
      {/* Hall of Loaders Header - responsive padding */}
      <div className="p-2 md:p-4 border-b border-zinc-800">
        <HallOfLoaders />
      </div>

      {/* Comments container with fixed fade - responsive spacing */}
      <div className="relative flex-1 overflow-hidden">
        {/* Scrollable content */}
        <div className="absolute inset-0 overflow-y-auto px-2 md:px-4 py-1 md:py-2 space-y-2 md:space-y-3 scrollbar-thin scrollbar-thumb-zinc-700">
          {comments.map((comment, i) => (
            <LiveCommentUserCard
              key={comment.id || i}
              avatar={comment.avatar}
              username={comment.username ?? ""}
              comment={comment.comment}
            />
          ))}
        </div>

        {/* Top fade overlay - fixed syntax */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-12 md:h-16 bg-gradient-to-b from-zinc-900/50 via-zinc-900/30 to-transparent z-10" />

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 md:h-16 bg-gradient-to-t from-zinc-900/50 via-zinc-900/30 to-transparent z-10" />
      </div>

      {/* Input area - responsive layout */}
      <div className="p-2 border-t border-zinc-800">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-1 md:gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="flex-1 sm:flex-initial sm:w-32 md:w-[9.5rem] bg-zinc-800/50 rounded-full placeholder:text-xs px-2 md:px-3 py-1.5 md:py-2 text-white placeholder-zinc-500 placeholder:font-semibold outline-none text-xs md:text-sm focus:ring-2 focus:ring-lime-500 transition-all duration-200 min-w-0"
          />

          {/* Action buttons - responsive layout */}
          <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
            <Image
              src="/paper-plane.svg"
              alt="Paper Plane"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            />

            {/* Show full buttons on larger screens */}
            <div className="hidden sm:flex flex-col gap-0.5 text-center justify-center items-center cursor-pointer">
              <Image
                src="/ticket.svg"
                alt="Ticket"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <p className="text-[8px] md:text-[9px] font-semibold opacity-80 whitespace-nowrap">
                Join Raffle
              </p>
            </div>

            <div className="hidden sm:flex flex-col gap-0.5 text-center justify-center items-center cursor-pointer">
              <Image
                src="/coin.svg"
                alt="Coin"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <p className="text-[8px] md:text-[9px] font-semibold opacity-80 whitespace-nowrap">
                Recharge
              </p>
            </div>

            {/* Mobile-only compact buttons */}
            <div className="sm:hidden flex items-center gap-1">
              <Image
                src="/ticket.svg"
                alt="Join Raffle"
                width={18}
                height={18}
                className="w-4 h-4 cursor-pointer"
              />
              <Image
                src="/coin.svg"
                alt="Recharge"
                width={18}
                height={18}
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Responsive LiveCommentUserCard Component
const LiveCommentUserCard = ({
  avatar,
  username,
  comment,
}: {
  avatar: string;
  username: string;
  comment: string;
}) => {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <img
        src={avatar}
        alt="User Avatar"
        className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-0.5 md:mb-1">
          <span className="text-zinc-500 text-[9px] md:text-[10px] font-bold truncate">
            @{username}
          </span>
        </div>
        <p className="text-zinc-300text-xs md:text-[13px] break-words">
          {comment}
        </p>
      </div>
    </div>
  );
};

// Responsive HallOfLoaders Component
const HallOfLoaders = () => {
  const topLoaders = [
    { username: "PinoyHighRoller", coins: "₱10,000 Coins" },
    { username: "BigBoss888", coins: "₱7,500 Coins" },
    { username: "LuckyBoi17", coins: "₱5,000 Coins" },
  ];

  return (
    <div className="space-y-2 md:space-y-3">
      <h3 className="text-orange-400 font-bold text-xs md:text-sm">
        Hall Of Loaders
      </h3>
      <div className="space-y-1 md:space-y-2">
        {topLoaders.map((loader, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-[10px] md:text-xs"
          >
            <div className="flex items-center gap-1 md:gap-2 min-w-0 flex-1">
              <span className="text-orange-400 font-bold flex-shrink-0">
                #{index + 1}
              </span>
              <span className="text-zinc-300 truncate">@{loader.username}</span>
            </div>
            <span className="text-zinc-400 flex-shrink-0 ml-2 text-[9px] md:text-xs">
              {loader.coins}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Responsive Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
        <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          <AvatarImage
            src="/avatar1.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <h1 className="text-white font-bold text-base md:text-lg truncate">
            AkosiDogie
          </h1>
          <div className="flex items-center gap-1 md:gap-2">
            <span
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse flex-shrink-0"
              aria-label="Live indicator"
            />
            <span className="text-red-400 text-xs md:text-sm font-medium">
              Live now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
