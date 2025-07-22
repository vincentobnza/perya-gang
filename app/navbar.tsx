import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const isLoggedIn = false;
  return (
    <nav className="w-full h-24 grid place-items-center border-b border-zinc-800">
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto  flex justify-between items-center">
        <Link href="/">
          <Image
            src="/LOGO.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>

        {/* login */}

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="uppercase text-md font-black text-[#BDFC06]"
          >
            {!isLoggedIn ? "REGISTER" : "LOGIN"}
          </Button>

          <Button size="icon">
            <User className="size-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
