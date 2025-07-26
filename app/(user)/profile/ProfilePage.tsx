"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import WinningLogs from "./WinningLogs";
import ActivityLogs from "./ActivityLogs";
import EditProfileDrawer from "./EditProfileDrawer";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Logout } from "@/app/api/auth/auth_logout";

export default function ProfilePage() {

  return (
    <div className="w-full max-w-screen-lg mx-auto p-3 md:p-10 space-y-10 md:space-y-16">
      <Header onLogout={() => Logout()} />
      <WinningLogs />
      <ActivityLogs />
    </div>
  );
}

function Header({ onLogout }: { onLogout: () => void }) {
  const dummyUserDetails = {
    name: "John Layda",
    username: "@johnlayda",
  };

  const handleLogout = async () => {
    await Logout();
    window.location.href = "/login";
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 pb-8 border-b border-zinc-900">
      <div>
        <Button
          size="icon"
          variant="ghost"
          className="p-5 mt-4 md:mt-0 rounded-full border border-zinc-900"
          onClick={handleLogout}
        >
          <LogOut className="text-main size-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-2 justify-center">
        <div className="p-0.5 overflow-hidden bg-zinc-900 rounded-full">
          <Avatar className="size-20">
            <AvatarImage src="/avatar1.png" />
          </Avatar>
        </div>

        <p className="mt-5 text-sm text-zinc-500 font-semibold">Hello!</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          {dummyUserDetails.name}
        </h1>
      </div>

      <EditProfileDrawer />
    </div>
  );
}
