"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AccountDetails from "./AccountDetails";

export function AuthDrawer({ text = "Get Started" }: { text?: string }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-[210px] h-13 bg-main text-black font-bold text-md">
          {text}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-950 border-none min-h-screen">
        <div className="mt-8 mx-auto w-full max-w-screen-md p-0 md:p-2 flex flex-col justify-start items-start text-left overflow-y-scroll">
          <DrawerHeader>
            <DrawerTitle className="text-4xl text-left font-bold text-main mb-4">
              Create your Account
            </DrawerTitle>
            <p className="text-left w-full  text-zinc-400">
              Register now to start unlocking GCash prizes, surprise loot, and
              exclusive giveaways — all while watching your favorite streamers.
            </p>
          </DrawerHeader>
          <div className="w-full p-3">
            <AccountDetails />
          </div>
          <div className="p-4 pb-0"></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
