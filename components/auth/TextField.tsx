import React from "react";

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
  return (
    <div className="w-full flex flex-col gap-2">
      {props.label && (
        <label className="text-sm font-medium text-zinc-400">
          {props.label}
        </label>
      )}
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        disabled={props.disabled}
        className={`w-full bg-zinc-900 text-white rounded-lg p-3 focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-[#BDFC06] ${props.className}`}
      />
    </div>
  );
}
