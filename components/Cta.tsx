import React from "react";
import { Button } from "./ui/button";
import { AuthDrawer } from "./auth/AuthDrawer";

export default function () {
  return (
    <div className="w-full p-8 md:p-8 lg:p-10 text-center flex justify-center items-center flex-col space-y-12">
      <h1 className="text-4xl  md:text-7xl font-bold">
        Don't Just Lurk... <br />
        Join The Fun!
      </h1>

      {/* SIGN UP NOW BUTTON */}

      <AuthDrawer text="Sign Up Now" />
    </div>
  );
}
