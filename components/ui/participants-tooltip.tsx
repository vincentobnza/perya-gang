"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/avatar1.png", // Replace with your image path or URL
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/avatar2.png", // Replace with your image path or URL
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/avatar3.png", // Replace with your image path or URL
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/avatar4.png",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/avatar1.png",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/avatar4.png",
  },
];

export function ParticipantsTooltip({ size = "h-14 w-14" }: { size?: string }) {
  return (
    <div className="flex flex-row items-start justify-start w-full">
      <AnimatedTooltip items={people} size={size} />
    </div>
  );
}
