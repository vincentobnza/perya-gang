"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
            className="uppercase text-md font-black text-[#BDFC06]"
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
    <Avatar
      className="border border-zinc-900 cursor-pointer"
      onClick={() => {
        router.push("/profile");
      }}
    >
      <AvatarImage src="/avatar4.png" alt="@avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
