import TextField from "@/components/auth/TextField";
import React from "react";
import AuthButton from "./AuthButton";

export default function AuthCard() {
  return (
    <div className="w-full max-w-lg p-3 md:p-8  rounded-lg flex items-center justify-center flex-col">
      <h1 className="text-2xl font-medium mb-8">LOGIN</h1>
      <TextField
        label="Email"
        type="email"
        placeholder="Enter your email"
        className="mb-4 w-full border border-zinc-800"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter your password"
        className="mb-4 w-full border border-zinc-800"
      />
      <AuthButton />
    </div>
  );
}
