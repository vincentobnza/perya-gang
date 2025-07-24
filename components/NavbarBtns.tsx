"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut, User, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavbarBtns({
  isAuthenticated = true,
}: {
  isAuthenticated?: boolean;
}) {
  const pathname = usePathname();
  // check is user is authenticated
  const portalRoute = pathname.startsWith("/portal") ? isAuthenticated : true;
  return (
    <div>
      <div className="flex items-center space-x-4">
        {!isAuthenticated && (
          <Button
            variant="ghost"
            className="uppercase text-md font-black text-main"
          >
            REGISTER
          </Button>
        )}
        <UserAvatar />
      </div>
    </div>
  );
}

const UserAvatar = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border border-zinc-900 cursor-pointer">
          <AvatarImage src="/avatar1.png" alt="@avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="self-start w-60 bg-zinc-900 border-none outline-none border border-zinc-800 p-2"
      >
        <DropdownMenuLabel className="font-bold text-zinc-400">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
