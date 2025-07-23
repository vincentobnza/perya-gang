"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthBtn() {
  const router = useRouter();
  return (
    <Button
      className="mt-8 w-full h-14 text-lg bg-main"
      onClick={() => router.push("/portal")}
    >
      SIGN IN
    </Button>
  );
}
