import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronsRight, Gift } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthDrawer } from "./auth/AuthDrawer";
import { motion } from "motion/react";
import { useMobile } from "@/hooks/useMobile";

export default function Hero() {
  const swiperRef = useRef<any>(null);
  const user = null;
  const isMobile = useMobile();

  return (
    <div className="mt-12 w-full text-center items-center flex flex-col gap-4">
      {/* CAROUSEL */}
      <motion.div
        initial={{ scale: 0.8, y: 10, rotate: -5, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl md:max-w-md p-2 md:p-5"
      >
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={isMobile ? 15 : 40}
          slidesPerView={isMobile ? 1.8 : 1} // Center slide with side peeking
          centeredSlides={true} // Center active slide
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="rounded-lg overflow-visible"
          breakpoints={{
            // Mobile breakpoint
            320: {
              slidesPerView: 1.8,
              spaceBetween: 10,
              centeredSlides: true,
            },
            // Tablet and up
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx} className="flex justify-center w-full">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={image}
                  alt={`Slide ${idx + 1}`}
                  width={320}
                  height={320}
                  className="object-cover rounded-2xl mx-auto w-[320px] aspect-square"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM NAVIGATION BUTTONS */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-main bg-zinc-900/20 border border-zinc-800 hover:bg-zinc-700/50"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            <ArrowLeft className="size-5" strokeWidth={3} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-main bg-zinc-900/20 border border-zinc-800 hover:bg-zinc-700/50"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            <ArrowRight className="size-5" strokeWidth={3} />
          </Button>
        </div>
      </motion.div>

      <div className="w-full p-8 space-y-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold text-center"
        >
          Get Rewarded Like <br /> Never Before
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-md lg:text-lg text-zinc-400 font-medium"
        >
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 self-center flex flex-col items-center justify-center space-y-4"
        >
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
        </motion.div>
      </div>
    </div>
  );
}

const images = [
  "/frame1.png",
  "/frame2.png",
  "/frame3.png",
  "/frame1.png",
  "/frame2.png",
  "/frame3.png",
];
