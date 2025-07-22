"use client";

import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  className?: string;
  disabled?: boolean;
};

export default function TextField(props: TextFieldProps) {
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
          type={
            props.type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : props.type || "text"
          }
          autoComplete="off"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
          disabled={props.disabled}
          className={`w-full min-w-0 bg-zinc-900 text-white rounded-lg p-3 h-14 focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-[#BDFC06] ${
            props.type === "password" ? "pr-12" : ""
          } ${props.className || ""}`}
        />

        {props.type === "password" && (
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-white focus:outline-none"
          >
            {isPasswordVisible ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
    </div>
  );
}
