"use client";
import NavbarBtns from "@/components/NavbarBtns";
import Image from "next/image";
import Link from "next/link";
import { validateLogin } from "./api/validate";
import { setToast } from "@/lib/common";
import { getUserData } from "@/lib/hooks/useLocalStorage";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    validateLogin({}, (success, message) => {
      console.log("Validation callback:", success, message);
      if (success) {
        const userData = getUserData();
        console.log("User data:", userData);
        setIsAuthenticated(true);
        setUser(userData?.f_ || "Guest");
      } else {
        setIsAuthenticated(false);
        setUser("Guest");
      }
    });
  }, []);

  return (
    <nav className="w-full h-24 grid place-items-center border-b border-zinc-900">
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/LOGO.png" width={50} height={50} alt="Logo" />
        </Link>
        {isAuthenticated && (
          <h1 className="text-sm md:text-[15px] lg:text-lg opacity-70">
            Hello {user}!
          </h1>
        )}
        <NavbarBtns isAuthenticated={isAuthenticated} />
      </div>
    </nav>
  );
}
