"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

export function RaffleSpinnerModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#bdfc06] text-black text-md font-bold">
          Start
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-zinc-900 border-none p-8 outline-none rounded-4xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl mb-8 ">
            Raffle Spinners
          </DialogTitle>
        </DialogHeader>
        {/* RAFFLE  */}
        <Raffle />
        <RaffleParticipants />
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const ROLL_DURATION = 10000; // 10 seconds
const ITEM_HEIGHT = 56; // px, adjust to match UserCard height+margin

const Raffle = () => {
  const [isRolling, setIsRolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [selectedWinner, setSelectedWinner] = useState<string | null>(null);

  // Helper to repeat the list for seamless looping
  const getLoopedList = () => {
    // Repeat the list 20 times for smoothness
    let arr: any[] = [];
    for (let i = 0; i < 20; i++) arr = arr.concat(SAMPLE_USERS);
    return arr;
  };
  const loopedList = getLoopedList();

  // Calculate the number of visible items and the center offset
  const VISIBLE_HEIGHT = 250; // px, matches the container height
  const VISIBLE_COUNT = Math.floor(VISIBLE_HEIGHT / ITEM_HEIGHT); // number of visible items
  const CENTER_OFFSET = Math.floor(VISIBLE_COUNT / 2); // index offset for center
  const centerIndex = Math.floor(loopedList.length / 2);

  // Start the rolling animation
  const handleStartRaffle = () => {
    setIsRolling(true);

    // Pick a winner
    const winnerIndex = Math.floor(Math.random() * SAMPLE_USERS.length);

    const start = performance.now();
    // Center the winner in the visible area
    const winnerFinalIndex =
      centerIndex - (centerIndex % SAMPLE_USERS.length) + winnerIndex;
    const centerScrollOffset = winnerFinalIndex - CENTER_OFFSET;

    function animate(now: number) {
      const elapsed = now - start;
      let t = Math.min(elapsed / ROLL_DURATION, 1); // 0 to 1

      // Ease out cubic for deceleration
      const ease = (x: number) => 1 - Math.pow(1 - x, 3);
      const easedT = ease(t);

      // Calculate scroll position
      // Start at 0, end at centerScrollOffset * ITEM_HEIGHT
      const maxScroll = centerScrollOffset * ITEM_HEIGHT;
      const scrollTop = maxScroll * easedT;
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollTop;
      }

      if (t < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Snap to winner
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTop = maxScroll;
          }
          setIsRolling(false);
          setSelectedWinner(SAMPLE_USERS[winnerIndex].username);
        }, 200);
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  // Clean up animation frame
  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-2 relative">
      {/* SELECTED AREA WITH BORDER ALWAYS ON SCREEN VIEW POSITION IS CENTERED AND FIXED */}
      {selectedWinner && (
        <div className="relative">
          <div
            className="pointer-events-none z-50 absolute translate-x-0 left-0 right-0 flex justify-center bg-lime-400/10"
            style={{
              top: ITEM_HEIGHT * CENTER_OFFSET,
              height: ITEM_HEIGHT,
              border: "2px solid #bdfc06",
              borderRadius: "8px",
            }}
          ></div>
        </div>
      )}
      <div
        ref={scrollRef}
        className="w-full mx-auto min-h-[200px] max-h-[250px] overflow-y-auto rounded-xl mb-5 relative raffle-scroll"
        style={{ scrollBehavior: isRolling ? "auto" : "smooth", height: 250 }}
      >
        {/* Raffle List */}
        <div style={{ paddingTop: 0, paddingBottom: 0 }} className="relative">
          {loopedList.map((user, idx) => (
            <UserCard
              key={idx + user.username}
              name={user.name}
              username={user.username}
              avatarUrl={user.avatarUrl}
            />
          ))}
        </div>
      </div>
      <Button
        className="bg-main mx-auto w-full text-md"
        size="lg"
        onClick={handleStartRaffle}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Start Raffle"}
      </Button>
    </div>
  );
};

const UserCard = ({ name, username, avatarUrl }: any) => {
  return (
    <div
      className={`flex items-center gap-4 mb-2 p-3 rounded-lg relative cursor-pointer transition-all duration-200 bg-zinc-800/10 hover:bg-zinc-800/20`}
      style={{ height: ITEM_HEIGHT }}
    >
      <img src={avatarUrl} alt={name} className="size-8 rounded-full" />
      <div className="flex flex-col">
        <h1 className="text-md text-zinc-200">{name}</h1>
        <p className="text-xs opacity-40">@{username}</p>
      </div>
    </div>
  );
};

const RaffleParticipants = () => {
  const totalParticipants = 2000;
  return (
    <div className="w-full p-5 bg-zinc-800/50 border border-zinc-800 rounded-2xl">
      <h1 className="text-md font-medium opacity-90 mb-5">
        Raffle Participants
      </h1>
      <div className="w-full space-y-4">
        <div className="w-full flex items-center justify-between border-b border-zinc-700/50 pb-3">
          <h1 className="text-sm opacity-80">Total</h1>
          <div className="px-3 h-7 font-bold text-sm grid place-items-center rounded-full bg-purple-600 text-white shadow-xl">
            {totalParticipants > 100 ? 100 + "+" : totalParticipants}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h1 className="text-sm opacity-80">Status</h1>
          <div className="px-3 h-7 font-bold text-sm grid place-items-center rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 shadow-xl">
            Ready
          </div>
        </div>
      </div>
    </div>
  );
};

const SAMPLE_USERS = [
  {
    name: "Dennis Onay",
    username: "dennis742378",
    avatarUrl: "/avatar1.png",
  },
  {
    name: "Kin Patrick",
    username: "kin13316",
    avatarUrl: "/avatar2.png",
  },
  {
    name: "Alice Johnson",
    username: "user1234",
    avatarUrl: "/avatar3.png",
  },
  {
    name: "Bob Brown",
    username: "bobbrown1234567",
    avatarUrl: "/avatar4.png",
  },
  {
    name: "Charlie White",
    username: "charliewhite7654321",
    avatarUrl: "/avatar1.png",
  },
];

export default RaffleSpinnerModal;
