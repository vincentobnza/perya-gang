import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import WinningLogs from "./WinningLogs";
import ActivityLogs from "./ActivityLogs";
import { Metadata } from "next";
import EditProfileDrawer from "./EditProfileDrawer";

const user = "John Layda";

export const metadata: Metadata = {
  title: `Profile - ${user}`, //REPLACE THIS with dynamic user name
  description: "Watch live streams from Perya Gang",
};

export default function ProfilePage() {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-3 md:p-10 space-y-10 md:space-y-16">
      <Header />
      <WinningLogs />
      <ActivityLogs />
    </div>
  );
}

const Header = () => {
  const dummyUserDetails = {
    name: "John Layda",
    username: "@johnlayda",
  };
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 pb-8 border-b border-zinc-800">
      <div></div>
      <div className="flex flex-col items-center gap-2 justify-center">
        <div className="p-0.5 overflow-hidden bg-zinc-900 rounded-full">
          <Avatar className="size-20">
            <AvatarImage src="/avatar1.png"></AvatarImage>
          </Avatar>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {dummyUserDetails.name}
        </h1>
        <p className="text-sm text-zinc-500 font-semibold">
          {dummyUserDetails.username}
        </p>
      </div>

      {/* EDIT PROFILE INFO */}
      <EditProfileDrawer />
    </div>
  );
};
