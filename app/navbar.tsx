"use client";
import NavbarBtns from "@/components/NavbarBtns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserData } from "@/lib/hooks/useLocalStorage";

export default function NavbarClient() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const user = getUserData();
  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  return (
    <nav className="w-full h-24 grid place-items-center border-b border-zinc-900 px-4">
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto flex justify-between items-center">
        <div title="Perya Gang - Get Rewarded Like Never Before">
          <Link href="/">
            <Image src="/LOGO.png" width={60} height={60} alt="Logo" />
          </Link>
        </div>

        <div className="relative">
          {/* OVERLAY BOTTOM TEXT */}
          <h1 className="absolute inset-0 font-bold flex items-center justify-center text-4xl md:text-5xl lg:text-6xl opacity-[2%]">
            WELCOME
          </h1>
          {isLogin && (
            <h1 className="text-sm md:text-lg font-bold opacity-90 z-10 bg-gradient-to-r from-zinc-600 via-zinc-100 to-zinc-600 bg-clip-text text-transparent">
              Hello, {user.f_}!
            </h1>
          )}
        </div>

        <NavbarBtns isAuthenticated={isLogin} />
      </div>
    </nav>
  );
}
