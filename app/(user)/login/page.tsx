import { Metadata } from "next";
import AuthCard from "../components/AuthCard";
import React from "react";

export const metadata: Metadata = {
  title: "Login - Perya Gang",
};

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center min-h-[60vh]">
      <AuthCard />
    </div>
  );
}
