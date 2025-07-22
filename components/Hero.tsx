import { Button } from "@/components/ui/button";
import { ChevronsRight, Gift } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full text-center items-center flex flex-col gap-4">
      {/* CAROUSEL */}

      {/* hero text
          
          */}

      <div className="w-full max-w-sm p-3 md:p-5 grid-cols-3">
        {images.map((image, idx) => (
          <Cards key={idx} image={image.image} />
        ))}
      </div>

      <div className="w-full p-10 space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Get Rewarded Like <br /> Never Before
        </h1>
        <p className="text-sm md:text-md lg:text-lg opacity-80">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.
        </p>
        <div className="mt-16 self-center flex flex-col items-center justify-center space-y-4">
          <Button className="w-[210px] h-13 font-bold text-md border border-zinc-700/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-blue-700">
                <Gift className="size-4" />
              </div>
              Join Rewards
            </div>

            <ChevronsRight />
          </Button>
          <Button className="w-[210px] h-13 bg-[#BDFC06] text-black font-bold text-md">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

const images = [
  {
    color: "",
    image: "/hero-character.png",
  },
  //   {
  //     color: "#CC00FF",
  //     image: "/hero-character.png",
  //   },
  //   {
  //     color: "#0047BA",
  //     image: "/hero-character.png",
  //   },
];

const Cards = ({ color, image }: { color: string; image: string }) => {
  return (
    <div className={`w-full grid place-items-center {bg-[${color}]}`}>
      <Image src={image} width={120} height={120} alt={image} />
    </div>
  );
};
