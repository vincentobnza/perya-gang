"use client";

import { Button } from "@/components/ui/button";
import { ParticipantsTooltip } from "@/components/ui/participants-tooltip";
import { Gift, MonitorPlay, Pointer, Smartphone } from "lucide-react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

export default function Main() {
  return (
    <Wrapper>
      <Heading
        topText="🛠️ Mechanics"
        title="How to Participate in Giveaways"
        description="Follow these steps to join and win exciting giveaways!"
      />

      <div className="w-full grid md:grid-cols-2  mt-12  gap-4">
        {cardInfo.map((card, idx) => (
          <Cards key={idx} card={card} />
        ))}
      </div>
    </Wrapper>
  );
}

const cardInfo = [
  {
    title: "Watch Any Livestream",
    description: "Stay tuned and watch your favorite streamers live.",
    icon: MonitorPlay,
    bgColor: "bg-[#CC00FF] text-white",
    iconBg: "bg-white/40",
  },

  {
    title: "Interact During the Stream",
    description:
      "Send at least 3 chat messages to join the event automatically.",
    icon: Pointer,
    bgColor: "bg-zinc-700 text-white",
    iconBg: "bg-blue-700",
  },

  {
    title: "Follow the Streamer ",
    description: "Make sure you hit Follow on their profile to be eligible.",
    icon: Smartphone,
    bgColor: "bg-[#BDFC06] text-black",
    isNot: true,
    iconBg: "bg-zinc-900",
  },

  {
    title: "Wait for the Giveaway",
    description: "The reward will be shown on screen — not posted in the chat!",
    icon: Gift,
    isBackground: "/APEX.png",
    bgColor: "bg-zinc-900",
    iconBg: "bg-white/40",
  },
];

type CardProps = {
  card: {
    title: string;
    description: string;
    icon: any;
    bgColor?: string;
    isNot?: boolean;
    iconBg: string;
    isBackground?: string;
  };
};

const Cards = ({ card }: CardProps) => {
  return (
    <div
      className={`w-full relative flex p-6 flex-col justify-start items-start gap-2 rounded-3xl ${card.bgColor}`}
    >
      {card.isBackground && (
        <div className="absolute inset-0 z-0">
          <img
            src={card.isBackground}
            alt="Background"
            className="w-full h-full object-cover rounded-3xl opacity-20"
          />
        </div>
      )}
      <div className="w-full flex justify-between items-center">
        <div className={`p-3 rounded-full ${card.iconBg} text-white`}>
          {<card.icon />}
        </div>

        <Button
          className={`font-bold rounded-full ${
            !card.isNot ? "bg-[#bdfc06]" : "bg-[#CC00FF]"
          }
          } text-black`}
          size="lg"
        >
          Explore
        </Button>
      </div>
      <h1 className="text-sm opacity-80 mb-4">Participants</h1>
      <div className="flex flex-col gap-2">
        <ParticipantsTooltip />
        <h1 className="w-3/4 text-2xl font-bold">{card.title}</h1>
        <p className=" opacity-70">{card.description}</p>
      </div>
    </div>
  );
};
