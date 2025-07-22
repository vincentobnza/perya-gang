import React from "react";
import TextField from "./TextField";

export default function AccountDetails() {
  return (
    <form className="w-full">
      <div className="w-full grid md:grid-cols-2 gap-4">
        <TextField label="Full Name" placeholder="Enter your full name" />
        <TextField label="Username" placeholder="Enter your username" />
        <TextField
          label="Email"
          placeholder="Enter your email address"
          type="email"
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
        />
      </div>
    </form>
  );
}
