import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronsRight, Gift } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthDrawer } from "./auth/AuthDrawer";

export default function Hero() {
  const swiperRef = useRef<any>(null);
  const user = null;
  return (
    <div className="mt-24 w-full text-center items-center flex flex-col gap-4">
      {/* CAROUSEL */}
      <div className="w-full max-w-sm p-3 md:p-5">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="rounded-lg"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={image}
                alt={`Slide ${idx + 1}`}
                width={500}
                height={500}
                className="object-contain rounded-4xl mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM NAVIGATION BUTTONS */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-main bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-700/50"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-main bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-700/50"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
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
          {!user ? (
            <AuthDrawer />
          ) : (
            <Button className="w-[210px] h-13 bg-main text-black font-bold text-md">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

const images = ["/frame1.png", "/frame2.png", "/frame3.png"];
