import React from "react";
import Navbar from "../navbar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col min-h-auto">
      <main className="flex-1">{children}</main>
    </div>
  );
}
