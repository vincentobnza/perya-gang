import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Album, SquarePen } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import TextField from "@/components/auth/TextField";

export default function EditProfileDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="p-5 md:p-5 mt-4 md:mt-0 rounded-full border border-zinc-900"
          >
            <SquarePen className="text-main size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-zinc-950 border-none min-h-screen">
          <div className="mt-8 mx-auto w-full max-w-screen-md p-0 md:p-2 flex flex-col justify-start items-start text-left overflow-y-scroll">
            <DrawerHeader>
              <DrawerTitle className="text-4xl text-left font-bold text-[#BDFC06]">
                Update your Profile
              </DrawerTitle>
              <p className="text-left w-full  text-zinc-400">
                Manage your account information.
              </p>
            </DrawerHeader>

            <form className="mt-14 w-full flex flex-col gap-2">
              {/* profile form */}
              <div className="size-28 bg-zinc-800 mx-auto rounded-full grid place-items-center relative">
                <Image
                  src="/avatar1.png"
                  alt="Profile Picture"
                  width={112}
                  height={112}
                  className="rounded-full object-cover opacity-30"
                />
                <Button size="icon" variant="ghost" className="absolute">
                  <ImageIcon className="text-main size-6" />
                </Button>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-4">
                <TextField
                  label="Full Name"
                  className="border border-zinc-800"
                />
                <TextField
                  label="Username"
                  className="border border-zinc-800"
                />

                <TextField label="Email" className="border border-zinc-800" />
                <TextField
                  label="Password"
                  className="border border-zinc-800"
                  placeholder="Enter new password"
                />
              </div>

              <Button className="mt-8 w-full h-12 bg-main rounded text-sm md:text-lg">
                Save Changes
              </Button>
            </form>
            <div className="p-4 pb-0"></div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
