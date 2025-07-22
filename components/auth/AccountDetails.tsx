"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "./TextField";
import { Button } from "../ui/button";
import { accountDetailsSchema, formFields } from "./zodSchema";

export default function AccountDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(accountDetailsSchema),
  });

  const onSubmit = async (data: formFields) => {
    try {
      console.log("Form data:", data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          {...register("fullName")}
          label="Full Name"
          placeholder="e.g John Doe"
          error={errors.fullName?.message}
          onChange={(value) =>
            register("fullName").onChange({ target: { value } })
          }
        />
        <TextField
          {...register("username")}
          label="Username"
          placeholder="User12345"
          error={errors.username?.message}
          onChange={(value) =>
            register("username").onChange({ target: { value } })
          }
        />
        <div className="md:col-span-2">
          <TextField
            {...register("email")}
            label="Email"
            placeholder="e.g john.doe@example.com"
            type="email"
            error={errors.email?.message}
            onChange={(value) =>
              register("email").onChange({ target: { value } })
            }
          />
        </div>
        <TextField
          {...register("password")}
          label="Password"
          placeholder="enter your password"
          type="password"
          error={errors.password?.message}
          onChange={(value) =>
            register("password").onChange({ target: { value } })
          }
        />
        <TextField
          {...register("confirmPassword")}
          label="Confirm Password"
          placeholder="confirm your password"
          type="password"
          error={errors.confirmPassword?.message}
          onChange={(value) =>
            register("confirmPassword").onChange({ target: { value } })
          }
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 mt-4 bg-[#BDFC06] text-black font-bold text-[16px] disabled:opacity-50"
      >
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
