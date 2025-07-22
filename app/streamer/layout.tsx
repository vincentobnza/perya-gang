import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-screen-xl mx-auto p-8 flex justify-center items-center">
      {children}
    </main>
  );
}
