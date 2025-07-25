"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { SAMPLE_USERS } from "@/data/dummy-data";
import { Confetti } from "@/components/magicui/confetti";
import { useRaffle } from "@/hooks/useRaffle";
import {
  VISIBLE_HEIGHT,
  ITEM_HEIGHT,
  ROLL_DURATION,
} from "@/app/(streamer)/components/constants";
import { useEffect } from "react";

// THIS RAFFLE MODAL IS FOR USER VIEW, WHEN STREAMER STARTS A RAFFLE USER WILL SEE THIS MODAL
export default function RaffleModal() {
  const isSpinning = false; // <-- set to true to trigger spinning
  return (
    <Dialog open={isSpinning}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-none p-2 md:p-8 outline-none rounded-4xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl mb-4">
            Raffle Spinner
          </DialogTitle>
        </DialogHeader>
        {isSpinning && <RaffleSpinner />}
      </DialogContent>
    </Dialog>
  );
}

const RaffleSpinner = () => {
  const {
    scrollRef,
    confettiRef,
    audioRef,
    selectedWinner,
    startRaffle,
    loopedList,
  } = useRaffle({
    users: SAMPLE_USERS,
    visibleHeight: VISIBLE_HEIGHT,
    itemHeight: ITEM_HEIGHT,
    rollDuration: ROLL_DURATION,
    onDone: () => {
      console.log("Spin complete!");
    },
  });
  useEffect(() => {
    startRaffle();
  }, []);
  return (
    <div className="relative w-full max-w-sm mx-auto space-y-6 rounded-lg mb-12">
      <audio ref={audioRef} src="/raffle-sound-effect.mp3" preload="auto" />
      <div className="relative" style={{ height: VISIBLE_HEIGHT }}>
        {selectedWinner && (
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-50 size-full"
            onMouseEnter={() => confettiRef.current?.fire({})}
          />
        )}
        <div
          ref={scrollRef}
          className="rounded-xl"
          style={{
            height: VISIBLE_HEIGHT,
            overflowY: "hidden",
            pointerEvents: "none",
          }}
        >
          <div className="flex flex-col">
            {loopedList.map((user, idx) => (
              <UserCard
                key={idx}
                name={user.name}
                username={user.username}
                avatarUrl={user.avatarUrl}
                isWinner={user.username === selectedWinner}
              />
            ))}
          </div>
        </div>

        <div
          className="absolute left-0 right-0 pointer-events-none z-50"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            height: ITEM_HEIGHT,
            border: "2px solid #bdfc06",
            borderRadius: "8px",
            backgroundColor: "rgba(190, 252, 6, 0.1)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/crown.png"
              alt="Crown"
              width={45}
              height={45}
              className="absolute -top-2 left-1 transform -translate-x-1/2 -translate-y-1/2 -rotate-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserCard = ({
  name,
  username,
  avatarUrl,
  isWinner = false,
}: {
  name: string;
  username: string;
  avatarUrl: string;
  isWinner?: boolean;
}) => {
  return (
    <div
      className={`relative flex items-center gap-4 px-4 py-3 transition-all duration-200 ${
        isWinner
          ? "bg-lime-400/5 text-lime-400 font-semibold"
          : "bg-zinc-900 hover:bg-zinc-800/20"
      }`}
      style={{
        height: ITEM_HEIGHT,
        boxSizing: "border-box",
      }}
    >
      <img src={avatarUrl} alt={name} className="size-8 rounded-full" />
      <div className="flex flex-col">
        <h1 className="text-md">{name}</h1>
        <p className="text-xs opacity-50">@{username}</p>
      </div>
    </div>
  );
};
