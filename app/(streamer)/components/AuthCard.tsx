'use client';
import TextField from "@/components/auth/TextField";
import React from "react";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";
import { setToast } from "@/lib/common";
import { LoginAccount } from "@/app/api/auth/auth_login";
import { Button } from "@/components/ui/button";

export default function AuthCard() {
   const router = useRouter();
    const onSubmit = async (e: any) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      if (!data.login_email || !data.login_password) {
        setToast("Please fill in all fields", "error");
        return;
      }
      LoginAccount(data, (success, message) => {
        if (success) {
          setToast(message, "success");
         router.push("/streamer");
        } else {
          setToast(message, "error");
        }
      });
  
  };
    return (
       <>
        <form className="w-full max-w-lg p-3 md:p-8  rounded-lg flex items-center justify-center flex-col" onSubmit={onSubmit}>
          <h1 className="text-2xl font-medium mb-8">LOGIN</h1>
          <div className="w-full flex flex-col gap-y-6">
          <TextField
            label="Email"
            type="email"
            name="login_email"
            placeholder="Enter your email"
            className="w-full border border-zinc-800 focus:ring-blue-500"
          />
        <TextField
          label="Password"
          type="password"
          name="login_password"
          placeholder="Enter your password"
          className="mb-4 w-full border border-zinc-800"
        />
        <Button
            className="mt-8 w-full h-14 text-lg bg-blue-700"
            type="submit">
              SIGN IN
        </Button>
       </div>
      </form>
    </>
  );
}
