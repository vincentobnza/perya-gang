"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "./TextField";
import { Button } from "../ui/button";
import { accountDetailsSchema, formFields } from "./zodSchema";
import { useRouter } from "next/navigation";

export default function AccountDetails() {
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    router.push("/portal");
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField label="Full Name" placeholder="e.g John Doe" />
        <TextField label="Username" placeholder="User12345" />
        <div className="md:col-span-2">
          <TextField
            label="Email"
            placeholder="e.g john.doe@example.com"
            type="email"
          />
        </div>
        <TextField
          label="Password"
          placeholder="enter your password"
          type="password"
        />
        <TextField
          label="Confirm Password"
          placeholder="confirm your password"
          type="password"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-14 mt-4 bg-[#BDFC06] text-black font-bold text-[16px] disabled:opacity-50"
      >
        Create Account
      </Button>
    </form>
  );
}
