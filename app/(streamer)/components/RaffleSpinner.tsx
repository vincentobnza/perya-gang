"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VISIBLE_HEIGHT, ITEM_HEIGHT, ROLL_DURATION } from "./constants";
import { Confetti } from "@/components/magicui/confetti";
import { type ConfettiRef } from "@/components/magicui/confetti";
import { Play } from "lucide-react";
import WinnerAlertModal from "./WinnerAlertModal";
import { SAMPLE_USERS } from "@/data/dummy-data";
import { useRaffle } from "@/hooks/useRaffle";

export function RaffleSpinnerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(val) => {
          if (!isRolling) {
            setIsOpen(val);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button className="bg-[#bdfc06] text-black text-md font-bold">
            <Play className="size-3" strokeWidth={3} />
            Start
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl bg-zinc-900 border-none p-2 md:p-8 outline-none rounded-4xl [&>button]:hidden">
          <DialogHeader>
            <DialogTitle className="text-center text-xl md:text-2xl mb-4">
              Raffle Spinners
            </DialogTitle>
          </DialogHeader>
          <Raffle
            setIsOpen={setIsOpen}
            setIsWinnerModalOpen={setIsWinnerModalOpen}
            setIsRolling={setIsRolling}
          />
          <RaffleParticipants />
        </DialogContent>
      </Dialog>

      <WinnerAlertModal
        isOpen={isWinnerModalOpen}
        setIsOpen={setIsWinnerModalOpen}
      />
    </>
  );
}

const Raffle = ({
  setIsOpen,
  setIsWinnerModalOpen,
  setIsRolling,
}: {
  setIsOpen: (open: boolean) => void;
  setIsWinnerModalOpen: (open: boolean) => void;
  setIsRolling: (val: boolean) => void;
}) => {
  const {
    scrollRef,
    confettiRef,
    audioRef,
    selectedWinner,
    isRolling,
    startRaffle,
    loopedList,
  } = useRaffle({
    users: SAMPLE_USERS,
    visibleHeight: VISIBLE_HEIGHT,
    itemHeight: ITEM_HEIGHT,
    rollDuration: ROLL_DURATION,
    onDone: (winner) => {
      setIsOpen(false);
        setIsWinnerModalOpen(true);
    },
  });

  useEffect(() => {
    setIsRolling(isRolling);
  }, [isRolling]);

  return (
    <div className="relative w-full max-w-sm mx-auto p-2 space-y-6 rounded-lg shadow-[2px_4px_16px_0px_rgba(24, 24, 27,0.06)_inset]">
      <audio ref={audioRef} src="/raffle-sound-effect.mp3" preload="auto" />
      <div className="relative" style={{ height: VISIBLE_HEIGHT }}>
        {selectedWinner && (
          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
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

      <Button
        className="bg-main mx-auto w-full text-md"
        size="lg"
        onClick={startRaffle}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Start Raffle"}
      </Button>
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
          : "bg-zinc-800/10 hover:bg-zinc-800/20"
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

export default RaffleSpinnerModal;
