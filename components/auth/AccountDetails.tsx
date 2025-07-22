import React from "react";
import TextField from "./TextField";
import { Button } from "../ui/button";

export default function AccountDetails() {
  return (
    <form className="w-full">
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

      <Button className="w-full h-14 mt-4 bg-[#BDFC06] text-black font-bold text-xl">
        Register
      </Button>
    </form>
  );
}
