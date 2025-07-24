import type { Variant } from "motion/react";

export type MotionVariants = {
  [key: string]: Variant;
};

export const CardVariants: MotionVariants = {
  initial: {
    scale: 0.8,
    y: 10,
    rotate: -5,
    opacity: 0,
  },
  isInView: {
    scale: 1,
    y: 0,
    rotate: 0,
    opacity: 1,
  },
  isHover: {
    scale: 1.1,
    rotate: 5,
    opacity: 0.8,
  },
  isTap: {
    scale: 0.7,
    rotate: -5,
    opacity: 0.7,
  },
};
