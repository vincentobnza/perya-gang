import React from "react";
import { Button } from "./ui/button";

export default function () {
  return (
    <div className="w-full p-8 md:p-8 lg:p-10 text-center flex justify-center items-center flex-col space-y-12">
      <h1 className="text-4xl  md:text-7xl font-bold">
        Don't Just Lurk... <br />
        Join The Fun!
      </h1>

      {/* SIGN UP NOW BUTTON */}

      <Button className="px-10 font-bold text-md  py-6 bg-[#bdfc06] text-black ">
        Sign Up Now
      </Button>
    </div>
  );
}
