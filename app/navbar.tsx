import NavbarBtns from "@/components/NavbarBtns";
import { h1 } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const isAuthenticated = true; // This should be replaced with actual authentication logic
  const user = "John Layda";
  return (
    <nav className="w-full h-24 grid place-items-center border-b border-zinc-900">
      <div className="w-full max-w-md md:max-w-screen-xl mx-auto  flex justify-between items-center">
        <Link href="/">
          <Image
            src="/LOGO.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>

        {isAuthenticated && (
          <h1 className="text-sm md:text-lg lg:text-xl">Hello {user}!</h1>
        )}
        {/* login */}
        <NavbarBtns isAuthenticated={isAuthenticated} />
      </div>
    </nav>
  );
}
