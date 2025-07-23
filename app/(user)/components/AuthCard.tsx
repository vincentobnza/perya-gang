import TextField from "@/components/auth/TextField";
import React from "react";
import AuthBtn from "./AuthBtn";

export default function AuthCard() {
  return (
    <div className="w-full max-w-lg p-3 md:p-8  rounded-lg flex items-center justify-center flex-col">
      <h1 className="text-2xl font-medium mb-8 tracking-wider">LOGIN</h1>
      <div className="w-full flex flex-col gap-y-6">
        <TextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          className="w-full border border-zinc-800"
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          className="w-full border border-zinc-800"
        />
      </div>
      <AuthBtn />
    </div>
  );
}
