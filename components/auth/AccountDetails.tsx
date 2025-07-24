"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "./TextField";
import { Button } from "../ui/button";
import { accountDetailsSchema, formFields } from "./zodSchema";
import { RegisterAccount } from "@/app/api/auth/auth_register";
import { set } from "zod";
import { setToast } from "@/lib/common";
import { useRouter } from "next/navigation";
import { storeUserData } from "@/lib/hooks/useLocalStorage";

export default function AccountDetails() {
 const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (data.reg_password !== data.reg_cpassword) {
     
      setToast("Passwords do not match", "error");
       e.target.reg_password.value = "";
       e.target.reg_cpassword.value = "";
      return;
    }

     const res = await RegisterAccount(data);
      
      if (res.success) {
        storeUserData(res.data);
        setToast(res.message, "success");
        router.push("/portal")
      } else {
          setToast(res.message, "error");
      }

  };

  return (
    <>
    <form className="w-full" onSubmit={onSubmit}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField name="reg_fullname" label="Full Name" placeholder="e.g John Doe" />
        <TextField name="reg_username" label="Username" placeholder="User12345" />
        <div className="md:col-span-2">
          <TextField
            name="reg_email"
            label="Email"
            placeholder="e.g john.doe@example.com"
            type="email"
          />
        </div>
        <TextField
          name="reg_password"
          label="Password"
          placeholder="enter your password"
          type="password"
        />
        <TextField
          name="reg_cpassword"
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
    </>
  );
}
