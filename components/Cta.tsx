import React from "react";
import { Button } from "./ui/button";
import { AuthDrawer } from "./auth/AuthDrawer";
import { motion } from "motion/react";

export default function () {
  return (
    <div className="w-full p-8 md:p-8 lg:p-10 text-center flex justify-center items-center flex-col space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl  md:text-7xl font-bold"
      >
        Don't Just Lurk... <br />
        Join The Fun!
      </motion.h1>

      {/* SIGN UP NOW BUTTON */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AuthDrawer text="Sign Up Now" />
      </motion.div>
    </div>
  );
}
