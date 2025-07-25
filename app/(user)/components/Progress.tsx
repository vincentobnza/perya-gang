import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CornerRightUp, SquareArrowOutUpRight } from "lucide-react";
export default function WeeklyProgress() {
  const CURRENT_PROGRESS = 50; // EXAMPLE PROGRESS UP TO 5000
  const MAX_PROGRESS = 1000; // EXAMPLE MAX PROGRESS
  return (
    <div className="border-l pl-8 border-lime-500/40 w-3/4 space-y-2 rounded-sm">
      <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-400">
        🚩 Weekly Raffle
      </h4>

      <h1 className="text-6xl font-bold mb-4">
        {CURRENT_PROGRESS} /{" "}
        <span className="text-xl text-main">{MAX_PROGRESS}</span>{" "}
        <span className="text-xs opacity-50">points</span>
      </h1>

      <div className="flex">
        <h3></h3>
      </div>
      <Progress
        value={CURRENT_PROGRESS}
        max={MAX_PROGRESS}
        className="w-[80%] h-4"
      />

      <Button className="mt-5 border text-zinc-400 hover:text-white border-zinc-800 has-[svg]:px-5">
        View Details
        <SquareArrowOutUpRight className="size-3" />
      </Button>
    </div>
  );
}
