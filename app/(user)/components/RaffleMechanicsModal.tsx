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
import { TvMinimalPlay, MousePointerClick, UserPlus, Gift } from "lucide-react";
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
            <div className="overflow-hidden max-h-[500px] overflow-y-auto">
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

              <div className="mt-4 w-full flex flex-col gap-3">
                <h1 className="text-left text-md opacity-70 font-semibold mb-5">
                  Participants
                </h1>
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
