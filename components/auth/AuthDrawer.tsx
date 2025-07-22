"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AuthTabs } from "./AuthTabs";

export function AuthDrawer() {
  const [goal, setGoal] = React.useState(350);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-[210px] h-13 bg-[#BDFC06] text-black font-bold text-md">
          Get Started
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-950 border-none min-h-screen">
        <div className="mx-auto w-full max-w-screen-lg p-8 flex flex-col justify-start items-start text-left">
          <DrawerHeader>
            <DrawerTitle className="text-4xl text-left font-bold text-[#BDFC06] mb-4">
              Create your Account
            </DrawerTitle>
            <p className="text-left w-full md:w-1/2 text-zinc-400">
              Register now to start unlocking GCash prizes, surprise loot, and
              exclusive giveaways — all while watching your favorite streamers.
            </p>
          </DrawerHeader>

          <div className="p-3">
            <AuthTabs />
          </div>
          <div className="p-4 pb-0"></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
