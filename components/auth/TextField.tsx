"use client";

import React, { useState, forwardRef } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { cn } from "@/lib/utils";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  name?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      {props.label && (
        <label className="text-sm font-medium text-zinc-400">
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          name={props.name}
          type={
            props.type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : props.type || "text"
          }
          autoComplete="new-password"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
          disabled={props.disabled}
          className={cn(
            "w-full min-w-0 bg-zinc-900 text-white rounded-lg p-3 px-4 h-14 focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-[#BDFC06] placeholder:text-zinc-500",
            props.type === "password" ? "pr-12" : "",
            props.className
          )}
        />
        {props.type === "password" && (
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
            className="absolute right-3 top-0 bottom-0 flex items-center justify-center w-6 h-full text-zinc-500 hover:text-white focus:outline-none"
          >
            {isPasswordVisible ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
      {props.error && (
        <span className="text-red-400/70 font-bold text-sm">{props.error}</span>
      )}
    </div>
  );
});

TextField.displayName = "TextField";

export default TextField;
