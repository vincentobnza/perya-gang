"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Radio, User } from "lucide-react";
import { LiveComments as LiveCommentsData } from "@/data/dummy-data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Responsive StreamingVideo Component
export default function StreamingVideoDesktop() {
  const isStreaming = true;

  const router = useRouter();
  return (
    <div className="mt-3 md:mt-5 lg:mt-8 mb-6 md:mb-14 w-full bg-zinc-950 relative px-3 md:px-0">
      {isStreaming ? (
        // IF STREAM IS LIVE
        <div className="max-w-screen-xl mx-auto">
          <Header />
          {/* Main content area - responsive layout */}
          <div className="mt-3 md:mt-5 flex flex-col lg:flex-row gap-3 md:gap-4 items-start relative">
            {/* Video container - responsive width */}
            <div className="w-full lg:flex-1 relative">
              {/* COUNT ME IN BUTTON */}

              <CountMeInButton />
              <div className="border border-[#CC00FF] rounded ">
                <div className=" aspect-video rounded overflow-hidden bg-zinc-900/20 border-2 border-[#CC00FF] relative">
                  <div className="absolute bottom-0 left-0 z-20 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none rounded-b-lg"></div>

                  {/* TOP NOTCH */}
                  <div
                    className="absolute top-0.3 left-1/2 -translate-x-1/2 z-30 bg-zinc-950/90 px-6 py-2 flex items-center gap-3 rounded-lg"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
                    }}
                  >
                    {/* Gradient border effect */}
                    <Image
                      src="/sparkle.png"
                      alt="Diamond Coin"
                      width={15}
                      height={15}
                      className="w-4 h-4"
                    />

                    {/* Live Now text */}
                    <span className="text-white text-sm font-bold tracking-wide">
                      Live Now
                    </span>
                  </div>

                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl -z-20"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
                      transform: "scale(1.1)",
                    }}
                  />

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

                  {/* LIVE INDICATOR LEFT SIDE */}
                  <div className="absolute border border-white/20 top-3 left-3 px-3 py-2 text-xs md:text-sm font-semibold rounded-full bg-zinc-700/20 backdrop-blur flex items-center gap-2">
                    <Radio
                      className="size-4 text-main animate-pulse"
                      strokeWidth={3}
                    />
                    Live Now
                  </div>

                  {/* LIVE INDICATOR RIGHT SIDE */}
                  <div className="absolute top-3 border right-3 border-white/20 px-3 py-2 text-xs md:text-sm font-semibold rounded-full bg-zinc-700/20 backdrop-blur flex items-center gap-2">
                    <User className="size-4 opacity-50" strokeWidth={3} />4
                  </div>

                  {/* MAIN BUTTONS */}

                  <div className="absolute bottom-3 right-3 flex items-center gap-x-8">
                    <div className="flex flex-col justify-center items-center gap-2 text-center z-20">
                      <Image
                        src="/ticket.svg"
                        alt="Ticket"
                        width={24}
                        height={24}
                        className="w-6 h-6 cursor-pointer"
                      />
                      <p className="text-xs font-medium text-white">
                        Join Raffle
                      </p>
                    </div>

                    <div
                      onClick={() => {
                        router.push(
                          "https://www.peryaplay.com/client/signup?locale=en"
                        );
                      }}
                      className="flex flex-col justify-center items-center gap-2 text-center z-20"
                    >
                      <Image
                        src="/coin.svg"
                        alt="Ticket"
                        width={24}
                        height={24}
                        className="w-6 h-6 cursor-pointer"
                      />
                      <p className="text-xs font-medium text-white">Recharge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat sidebar - responsive dimensions */}
            <div className="w-full lg:w-80 h-64 sm:h-80 md:h-96 lg:h-[531px]">
              <LiveComments />
            </div>
          </div>
        </div>
      ) : (
        // IF STREAM IS OFFLINE
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900/50  border border-zinc-800 rounded-xl max-w-screen-xl mx-auto">
          <Image
            src="/hotspot-offline.svg"
            alt="Offline Icon"
            width={50}
            height={50}
            className=" mb-4"
          />
          <h2 className="text-white text-4xl font-semibold mt-4">
            Stream Offline
          </h2>

          <p className="text-zinc-500 font-medium text-sm mt-4 text-center max-w-md">
            Oops! The stream hasn’t started yet. <br /> Come back later or
            explore other live events happening now.
          </p>

          <Button
            size="lg"
            className="mt-12 bg-main font-bold"
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            See schedule
          </Button>
        </div>
      )}
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
            className="flex-1  bg-zinc-800/50 rounded-full placeholder:text-xs px-2 md:px-3 py-1.5 md:py-2 text-white placeholder-zinc-500 placeholder:font-semibold outline-none text-xs md:text-sm focus:ring-2 focus:ring-lime-500 transition-all duration-200 min-w-0"
          />

          {/* Action buttons - responsive layout */}
          <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
            <div className="w-7 h-7 grid place-items-center rounded-full bg-[#CC00FF]">
              <Image
                src="/send-plane.png"
                alt="Paper Plane"
                width={16}
                height={16}
              />
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
    {
      username: "user12242",
      avatar: "/avatar3.png",
      rankIcon: "/hol-icon-1.svg",
      coinsGained: "10, 000",
    },
    {
      username: "user12243",
      avatar: "/avatar2.png",
      rankIcon: "/hol-icon-2.svg",
      coinsGained: "8, 000",
    },
    {
      username: "user12244",
      avatar: "/avatar5.png",
      rankIcon: "/hol-icon-3.svg",
      coinsGained: "5, 000",
    },
  ];

  return (
    <div className="space-y-2 md:space-y-3">
      <div className="flex items-start gap-x-2">
        <Image
          src="/sparkle.png"
          alt="Hall of Loaders Icon"
          width={16}
          height={16}
        />
        <h3 className="text-zinc-200 font-bold text-xs md:text-sm">
          Hall Of Loaders
        </h3>
      </div>
      <div className="space-y-1 ">
        {topLoaders.map((loader, index) => (
          <div
            key={index}
            className={`w-full flex items-center p-2 rounded-sm justify-between gap-2 text-zinc-300 text-xs md:text-sm 
              ${index === 0 ? "bg-lime-400/5" : index === 1 ? "bg-purple-400/10" : "bg-yellow-800/10"}
              
              `}
          >
            <div className="flex items-start space-x-3">
              <Image
                src={loader.rankIcon}
                alt={`Rank ${index + 1}`}
                width={24}
                height={24}
              />

              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full ${index === 0 ? "border-2 border-lime-400 relative" : ""}`}
                >
                  {index === 0 && (
                    <Image
                      src="/3d-crown.png"
                      alt="Crown"
                      width={16}
                      height={16}
                      className="rounded-full absolute -top-3 -right-2 rotate-[30deg]"
                    />
                  )}
                  <Image
                    src={loader.avatar}
                    alt={`${loader.username} Avatar`}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>

                <span className="text-zinc-200 font-medium text-xs truncate">
                  @{loader.username}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Image
                src="/diamond-coin.png"
                alt="Coins"
                width={16}
                height={16}
              />

              <span className="text-yellow-500 font-bold text-xs mr-1 md:text-sm antialiased">
                {loader.coinsGained}
              </span>
            </div>
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
        <Avatar className="size-8 flex-shrink-0">
          <AvatarImage
            src="/avatar3.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <h1 className="text-white font-bold text-base md:text-lg truncate">
            AkosiDogie
          </h1>
        </div>
      </div>
    </div>
  );
};

// COUNT ME IN BUTTON, THIS BUTTON WILL POPUP IF STREAMER THROWS REWARD

const CountMeInButton = () => {
  const isCountMeIn = true;
  return (
    <div className="z-50 flex flex-col justify-center items-center gap-2 absolute -bottom-23 left-1/2 transform -translate-x-1/2">
      <h1 className="text-sm font-medium">Be Fast!</h1>
      <button
        className={`rounded-full font-bold py-2 px-4 shadow-lg transition-colors duration-200 ${
          !isCountMeIn ? "bg-main" : "bg-zinc-700 border border-zinc-600 px-8"
        }`}
      >
        {!isCountMeIn ? "Count Me In" : "Joined"}
      </button>

      <Timer />
    </div>
  );
};

const Timer = () => {
  // Set initial countdown time in seconds (e.g., 3 hours, 56 minutes, 22 seconds)
  const initialSeconds = 3 * 3600 + 56 * 60 + 22;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((secs % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  };

  return (
    <div className="flex flex-col gap-2 items-center text-center mx-auto">
      <h4 className="text-sm font-bold text-zinc-500">Raffle Countdown</h4>
      {/* COUNTDOWN TIMER */}
      <h1 className="text-4xl font-bold">{formatTime(secondsLeft)}</h1>
    </div>
  );
};
