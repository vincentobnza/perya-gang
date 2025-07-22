import React from "react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";

export default function Giveaways() {
  return (
    <Wrapper>
      <Heading
        topText="🎁  Ongoing Giveaways"
        title="Watch. Engage. Win."
        description="Join our exclusive streamer giveaways and get the chance to win epic rewards from merch, supplements, to surprise loot drops!"
      />

      <div className="w-full grid md:grid-cols-3 mt-12 md:p-10 lg:p-20 gap-4">
        {cardInfo.map((card, idx) => (
          <GiveawayCards key={idx} card={card} />
        ))}
      </div>
    </Wrapper>
  );
}

const cardInfo = [
  {
    price: "₱100-1000",
    image: "/gift.png",
  },
  {
    price: "₱100-1000",
    image: "/gift.png",
  },
  {
    price: "₱100-1000",
    image: "/coins.png",
  },
];

type CardProps = {
  card: {
    price: string;
    image: string;
  };
};

const GiveawayCards = ({ card }: CardProps) => {
  return (
    <div
      className={`w-full relative flex p-8 flex-col justify-start items-start gap-4 rounded-3xl bg-zinc-800/80 border border-zinc-700/50 hover:bg-zinc-800 transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-3xl font-bold">{card.price}</h1>
      <h3 className="text-sm opacity-70">GCash Credits</h3>

      {/* floating image */}

      <img
        src={card.image}
        alt="image"
        className="size-40 absolute -bottom-8 right-0"
      />
    </div>
  );
};
