import React from "react";
import { motion } from "motion/react";

type HeadingProps = {
  topText: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  isColor?: boolean;
};

export default function Heading({
  topText,
  title,
  description,
}: HeadingProps & { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          duration: 0.7,
        }}
        className="p-2 px-3 primary-color rounded-full bg-main self-start text-black font-bold mb-4"
      >
        {topText}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          duration: 0.7,
          delay: 0.1,
        }}
        className="w-[80%] text-3xl md:text-4xl lg:text-7xl font-bold leading-none mb-2"
      >
        {title || "Default Title"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          duration: 0.7,
          delay: 0.2,
        }}
        className="w-full md:w-3/4 text-zinc-300 font-medium"
      >
        {description || "Description goes here."}
      </motion.p>
    </div>
  );
}
