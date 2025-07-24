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
    <nav className="w-full h-24 grid place-items-center border-b border-zinc-900">
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/LOGO.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>

        {isLogin && (
          <h1 className="text-sm md:text-lg lg:text-xl">Hello {user.f_}!</h1>
        )}

        <NavbarBtns isAuthenticated={isLogin} />
      </div>
    </nav>
  );
}
