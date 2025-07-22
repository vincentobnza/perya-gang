import React from "react";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-8 md:p-10 lg:p-20 flex flex-col gap-2 space-y-4">
      {children}
    </div>
  );
}
