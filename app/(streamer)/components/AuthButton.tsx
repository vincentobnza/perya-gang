"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthButton() {
  const router = useRouter();
  return (
    <Button
      className="mt-8 w-full h-14 text-lg bg-blue-700"
      onClick={() => router.push("/streamer")}
    >
      SIGN IN
    </Button>
  );
}
