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
                  <div className="absolute bottom-3 right-3 flex items-center gap-x-4 sm:gap-x-8">
                    <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 text-center z-20">
                      <Image
                        src="/ticket.svg"
                        alt="Ticket"
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
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
                      className="flex flex-col justify-center items-center gap-1 sm:gap-2 text-center z-20"
                    >
                      <Image
                        src="/coin.svg"
                        alt="Ticket"
                        width={24}
                        height={24}
                        className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                      />
                      <p className="text-xs font-medium text-white">Recharge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Chat sidebar - responsive dimensions */}
            <div className="w-full lg:w-80 h-80 sm:h-96 md:h-[450px] lg:h-[531px]">
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
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
            Stream Offline
          </h2>

          <p className="text-zinc-500 font-medium text-sm mt-4 text-center max-w-md px-4">
            Oops! The stream hasn't started yet. <br /> Come back later or
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
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const isScrollingRef = React.useRef(false);

  const scrollToBottom = (smooth = true) => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const handleScroll = () => {
    if (isScrollingRef.current || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;

    setIsAutoScroll(isNearBottom);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment = {
      id: `lc-${Date.now()}`,
      avatar: "/default-avatar.png",
      username: "You",
      comment: input,
    };

    setComments((prev) => [...prev, newComment]);
    setInput("");

    // Force scroll to bottom for new user messages
    setIsAutoScroll(true);
    setTimeout(() => {
      scrollToBottom(true);
    }, 50);
  };

  // Auto-scroll effect for new comments
  React.useEffect(() => {
    if (isAutoScroll) {
      scrollToBottom(false);
    }
  }, [comments, isAutoScroll]);

  // Throttled scroll handler
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollContainer.addEventListener("scroll", throttledHandleScroll, {
      passive: true,
    });

    return () => {
      scrollContainer.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full bg-zinc-900/50 rounded backdrop-blur-sm border border-zinc-800 flex flex-col overflow-hidden">
      {/* Hall of Loaders Header - responsive padding */}
      <div className="p-3 sm:p-4 border-b border-zinc-800 flex-shrink-0">
        <HallOfLoaders />
      </div>

      {/* Comments container with fixed fade - responsive spacing */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        {/* Scrollable content */}
        <div
          ref={scrollContainerRef}
          className="absolute inset-0 overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent scroll-smooth"
          onScroll={() => {
            isScrollingRef.current = true;
            clearTimeout(isScrollingRef.current as any);
            (isScrollingRef.current as any) = setTimeout(() => {
              isScrollingRef.current = false;
            }, 150);
          }}
        >
          {comments.map((comment, i) => (
            <LiveCommentUserCard
              key={comment.id || i}
              avatar={comment.avatar}
              username={comment.username ?? ""}
              comment={comment.comment}
              isCurrentUser={comment.username === "You"}
            />
          ))}
        </div>

        {/* Scroll to bottom indicator */}
        {!isAutoScroll && (
          <div className="absolute bottom-16 sm:bottom-20 right-4 z-20">
            <button
              onClick={() => {
                setIsAutoScroll(true);
                scrollToBottom(true);
              }}
              className="w-8 h-8 bg-[#CC00FF] hover:bg-[#CC00FF]/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 animate-bounce"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        )}

        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-8 sm:h-12 bg-gradient-to-b from-zinc-900/50 via-zinc-900/30 to-transparent z-10" />

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 sm:h-12 bg-gradient-to-t from-zinc-900/50 via-zinc-900/30 to-transparent z-10" />
      </div>

      {/* Input area - responsive layout */}
      <div className="p-2 sm:p-3 border-t border-zinc-800 flex-shrink-0">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="flex-1 bg-zinc-800/50 rounded-full placeholder:text-xs px-3 py-2 text-white placeholder-zinc-500 placeholder:font-semibold outline-none text-xs sm:text-sm focus:ring-2 focus:ring-lime-500 transition-all duration-200 min-w-0"
          />

          {/* Send button - always visible */}
          <button
            type="submit"
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#CC00FF] flex-shrink-0 hover:bg-[#CC00FF]/80 transition-colors"
          >
            <Image
              src="/send-plane.png"
              alt="Send"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>

          {/* Mobile-only compact action buttons */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700/50 hover:bg-zinc-700 transition-colors"
            >
              <Image
                src="/ticket.svg"
                alt="Join Raffle"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700/50 hover:bg-zinc-700 transition-colors"
            >
              <Image
                src="/coin.svg"
                alt="Recharge"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
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
  isCurrentUser = false,
}: {
  avatar: string;
  username: string;
  comment: string;
  isCurrentUser?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    // Animate new comments
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-start gap-2 sm:gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${isCurrentUser ? "bg-zinc-800/30 -mx-2 px-2 py-1 rounded-lg" : ""}`}
    >
      <img
        src={avatar}
        alt="User Avatar"
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-0.5">
          <span
            className={`text-xs sm:text-sm font-bold truncate ${
              isCurrentUser ? "text-[#CC00FF]" : "text-zinc-500"
            }`}
          >
            @{username}
          </span>
          {isCurrentUser && (
            <span className="text-xs text-[#CC00FF] opacity-75">• You</span>
          )}
        </div>
        <p className="text-zinc-300 text-xs sm:text-sm break-words leading-relaxed">
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
    <div className="space-y-2 sm:space-y-3">
      <div className="flex items-center gap-x-2">
        <Image
          src="/sparkle.png"
          alt="Hall of Loaders Icon"
          width={16}
          height={16}
          className="w-4 h-4 flex-shrink-0"
        />
        <h3 className="text-zinc-200 font-bold text-xs sm:text-sm">
          Hall Of Loaders
        </h3>
      </div>
      <div className="space-y-1">
        {topLoaders.map((loader, index) => (
          <div
            key={index}
            className={`w-full flex items-center p-2 rounded-sm justify-between gap-2 text-zinc-300 text-xs sm:text-sm 
              ${index === 0 ? "bg-lime-400/5" : index === 1 ? "bg-purple-400/10" : "bg-yellow-800/10"}
            `}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <Image
                src={loader.rankIcon}
                alt={`Rank ${index + 1}`}
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />

              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`rounded-full relative flex-shrink-0 ${index === 0 ? "border-2 border-lime-400" : ""}`}
                >
                  {index === 0 && (
                    <Image
                      src="/3d-crown.png"
                      alt="Crown"
                      width={14}
                      height={14}
                      className="absolute -top-2.5 -right-1.5 rotate-[30deg] w-3.5 h-3.5"
                    />
                  )}
                  <Image
                    src={loader.avatar}
                    alt={`${loader.username} Avatar`}
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6"
                  />
                </div>

                <span className="text-zinc-200 font-medium text-xs truncate min-w-0">
                  @{loader.username}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <Image
                src="/diamond-coin.png"
                alt="Coins"
                width={14}
                height={14}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
              <span className="text-yellow-500 font-bold text-xs sm:text-sm">
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
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
          <AvatarImage
            src="/avatar3.png"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <h1 className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
            AkosiDogie
          </h1>
        </div>
      </div>
    </div>
  );
};

// COUNT ME IN BUTTON, THIS BUTTON WILL POPUP IF STREAMER THROWS REWARD
const CountMeInButton = () => {
  const isCountMeIn = false;
  return (
    <div
      className={`z-50 flex flex-col justify-center items-center gap-2 absolute -bottom-20 sm:-bottom-23 left-1/2 transform -translate-x-1/2`}
    >
      <h1 className="text-sm font-medium">Be Fast!</h1>
      <button
        className={`rounded-full font-bold py-2 px-4 sm:px-6 shadow-lg transition-colors duration-200 text-sm ${
          !isCountMeIn ? "bg-main" : "bg-zinc-700 border border-zinc-600"
        }`}
      >
        {!isCountMeIn ? "Count Me In" : "Joined"}
      </button>

      {isCountMeIn ? <Timer /> : ""}
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
      <h4 className="text-xs sm:text-sm font-bold text-zinc-500">
        Raffle Countdown
      </h4>
      {/* COUNTDOWN TIMER */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        {formatTime(secondsLeft)}
      </h1>
    </div>
  );
};
