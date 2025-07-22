"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { User } from "lucide-react";

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
      <div className="flex items-center space-x-2">
        {!isAuthenticated && (
          <Button
            variant="ghost"
            className="uppercase text-md font-black text-[#BDFC06]"
          >
            REGISTER
          </Button>
        )}
        <Button size="icon">
          <User className="size-5 text-[#BDFC06]" />
        </Button>
      </div>
    </div>
  );
}
