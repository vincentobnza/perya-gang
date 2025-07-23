"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

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

const Raffle = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  return (
    <div className="w-full max-w-sm mx-auto space-y-6 p-2">
      <div className="w-full mx-auto min-h-[200px] max-h-[250px] overflow-y-auto rounded-xl mb-5 relative">
        {/* OVERLAY */}
        {SAMPLE_USERS.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            username={user.username}
            avatarUrl={user.avatarUrl}
            isSelected={selectedUser === index}
            onClick={() => setSelectedUser(index)}
          />
        ))}
      </div>
      <Button className="bg-main mx-auto w-full text-md" size="lg">
        Start Raffle
      </Button>
    </div>
  );
};

const UserCard = ({ name, username, avatarUrl, isSelected, onClick }: any) => {
  return (
    <div
      className={`flex items-center gap-4 mb-2 p-3 rounded-lg relative cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-2 border-lime-400/80 ml-6"
          : "bg-zinc-800/10 hover:bg-zinc-800/20 ml-6"
      }`}
      onClick={onClick}
    >
      {/* Crown icon for selected user */}
      {isSelected && (
        <img
          src="/crown.png"
          alt="Crown"
          width={40}
          height={40}
          className="absolute -left-6 top-0 transform -translate-y-1/2 z-20 -rotate-[8deg]"
        />
      )}

      <img src={avatarUrl} alt={name} className="size-8 rounded-full" />
      <div className="flex flex-col">
        <h1
          className={`text-md ${isSelected ? "text-lime-300 font-medium" : "text-zinc-200"}`}
        >
          {name}
        </h1>
        <p className={`text-xs ${isSelected ? "opacity-60" : "opacity-40"}`}>
          @{username}
        </p>
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
    avatarUrl: "./avatar1.png",
  },
  {
    name: "Kin Patrick",
    username: "kin13316",
    avatarUrl: "./avatar2.png",
  },
  {
    name: "Alice Johnson",
    username: "user1234",
    avatarUrl: "./avatar3.png",
  },
  {
    name: "Bob Brown",
    username: "bobbrown1234567",
    avatarUrl: "./avatar4.png",
  },
  {
    name: "Charlie White",
    username: "charliewhite7654321",
    avatarUrl: "./avatar1.png",
  },
];

export default RaffleSpinnerModal;
