import React from "react";
import { Gift } from "lucide-react";

export default function WeeklyProgress() {
  const CURRENT_PROGRESS = 750; // EXAMPLE PROGRESS UP TO 5000
  const MAX_PROGRESS = 1000; // EXAMPLE MAX PROGRESS
  const progressPercentage = (CURRENT_PROGRESS / MAX_PROGRESS) * 100;

  return (
    <div className="p-8 rounded-lg bg-zinc-900/50 border border-zinc-800/70">
      <div className="relative   w-full  space-y-6 rounded-sm">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-500">
              Weekly Raffle Reward
            </h4>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-bold text-white">
              {CURRENT_PROGRESS.toLocaleString()}
            </span>
            <span className="text-lg text-zinc-400">/</span>
            <span className="text-xl text-lime-500 font-semibold">
              {MAX_PROGRESS.toLocaleString()}
            </span>
            <span className="text-sm text-zinc-500 ml-1">credits</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          {/* Progress Bar with Indicators */}
          <div className="relative">
            {/* Enhanced Progress Bar */}
            <div className="relative w-full h-4 bg-zinc-800/50 rounded-full border border-zinc-700/50 overflow-hidden backdrop-blur-sm">
              {/* Progress Fill */}
              <div
                className="h-full bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>

              {/* Progress track glow */}
              <div
                className="absolute top-0 h-full bg-lime-500/20 rounded-full blur-sm transition-all duration-1000"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>

            {/* Current Progress Flag */}
            <div
              className="absolute -top-12 transform -translate-x-1/2 transition-all duration-1000 ease-out"
              style={{ left: `${Math.min(progressPercentage, 95)}%` }}
            >
              <div className="relative flex flex-col items-center">
                {/* Flag with current progress */}
                <div className="bg-lime-500 text-zinc-900 px-3 py-1.5 rounded text-xs font-bold shadow-lg border border-lime-400">
                  <div className="flex items-center gap-1">
                    🚩
                    {CURRENT_PROGRESS}
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-lime-500"></div>
                </div>
              </div>
            </div>

            {/* End Goal Gift */}
            <div className="absolute -top-10 right-0 transform">
              <div className="relative flex flex-col items-center">
                {/* Gift box */}
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2 rounded-lg shadow-lg border border-amber-400/50 hover:scale-110 transition-transform duration-300">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                {/* Reward label */}
                <div className="mt-1 bg-zinc-800 text-amber-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-zinc-700">
                  REWARD
                </div>
              </div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex justify-between items-center text-sm font-semibold">
            <div className="text-zinc-400">
              <span className="text-lime-500 font-semibold">
                {progressPercentage.toFixed(1)}%
              </span>{" "}
              complete
            </div>
            <div className="text-zinc-500 text-sm font-semibold">
              {MAX_PROGRESS - CURRENT_PROGRESS} credits remaining
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
