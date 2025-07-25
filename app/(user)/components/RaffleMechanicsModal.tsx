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
import {
  TvMinimalPlay,
  MousePointerClick,
  UserPlus,
  Gift,
  ChevronsDown,
} from "lucide-react";
import { useState } from "react";
import { JoinSuccess } from "./JoinSuccess";

export function RaffleMechanicsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleJoinRaffle = () => {
    setIsOpen(false);
    setShowSuccess(true);
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#bdfc06] text-black text-md font-bold">
            Join Raffle
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl bg-zinc-900 border-none">
          <DialogHeader>
            <DialogTitle className="text-left text-xl text-main">
              Raffle Mechanics
            </DialogTitle>
            <DialogDescription className="text-left text-sm">
              Earn points every time you watch streams, send messages
              <br /> and join giveaways.
            </DialogDescription>
            <div className="overflow-hidden max-h-[400px] overflow-y-auto relative">
              <div className="mt-4 w-full flex flex-col gap-3">
                {Mechanics.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>

              <div className="mt-4 w-full flex flex-col gap-2">
                <h1 className="text-left text-md opacity-70 font-semibold">
                  Participants
                </h1>
                {SAMPLE_USERS.map((user, index) => (
                  <div className="flex flex-col gap-2">
                    <UserCard
                      key={index}
                      name={user.name}
                      username={user.username}
                      avatarUrl={user.avatarUrl}
                    />
                  </div>
                ))}

                <Button className="mb-5 w-26 mx-auto text-xs rounded border border-zinc-800 h-8">
                  View More
                  <ChevronsDown />
                </Button>
              </div>
            </div>
            <div className="w-full flex items-center justify-center text-sm text-zinc-300 p-3  border-3 border-dashed border-zinc-800 rounded shadow-xl">
              <h1>🛈 Winners will be announced live on stream.</h1>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="w-full h-12 text-black text-lg bg-main"
              onClick={handleJoinRaffle}
            >
              Join Raffle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <JoinSuccess isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

const Mechanics = [
  {
    title: "Watch Any Live Stream",
    description: "Stay tuned and watch your favorite streamers live.",
    icon: TvMinimalPlay,
  },
  {
    title: "Interact During the Stream",
    description:
      "Send at least 3 chat messages to join the event automatically.",
    icon: MousePointerClick,
  },
  {
    title: "Follow the Streamer",
    description: "Make sure you hit Follow on their profile to be eligible.",
    icon: UserPlus,
  },
  {
    title: "Wait for the Giveaway",
    description: "The reward will be shown on screen not posted in the chat!",
    icon: Gift,
  },
];

const Card = ({ title, description, icon: Icon }: any) => {
  return (
    <div className="flex items-start justify-start gap-4 p-3 bg-zinc-800/50 border border-zinc-800 rounded-lg shadow-xl">
      <div className="p-2 rounded-full bg-blue-700 text-white">
        <Icon className="size-4" />
      </div>
      <div>
        <h3 className="text-md font-semibold text-left text-zinc-200 mb-1">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 text-left">{description}</p>
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

const UserCard = ({ name, username, avatarUrl }: any) => {
  return (
    <div className="flex items-center gap-3 p-2 bg-zinc-800/10 border border-zinc-800 rounded-lg shadow-lg">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="size-8 rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold">{name}</h1>
        <p className="text-[10px] opacity-50">@{username}</p>
      </div>
    </div>
  );
};
