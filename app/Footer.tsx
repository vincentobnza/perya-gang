"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  if (!isAuthPage) {
    return null; // Don't render footer on auth pages
  }
  return (
    <div className="w-full h-22 bg-zinc-900 border-t border-zinc-800 grid place-items-center">
      <h1 className="opacity-60">Perya Gang | All rights reserved.</h1>
    </div>
  );
}
