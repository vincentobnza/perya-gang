"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trophy, Sparkles, Star, Crown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WinnerAlertModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      audioRef.current = new Audio("/winner_sound_effect.mp3");
      audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    }
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border border-purple-500/20 p-0 outline-none rounded-2xl [&>button]:hidden overflow-hidden">
        <DialogTitle className="sr-only">Winner Announcement</DialogTitle>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-ping"></div>
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-8 left-8 w-4 h-4 text-yellow-400 animate-bounce delay-0" />
          <Star className="absolute top-12 right-12 w-3 h-3 text-purple-400 animate-bounce delay-300" />
          <Sparkles className="absolute bottom-16 left-16 w-5 h-5 text-pink-400 animate-bounce delay-700" />
          <Star className="absolute bottom-20 right-8 w-4 h-4 text-blue-400 animate-bounce delay-1000" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          {/* Crown icon at top */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md opacity-50 animate-pulse scale-110"></div>
            <div className="relative p-6 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
              <Crown className="w-12 h-12 text-yellow-400" />
            </div>
          </div>

          {/* Main trophy section */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse scale-125"></div>
            <div className="relative p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 shadow-2xl">
              <div className="p-6 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-300/20">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-purple-200 uppercase tracking-wider">
                🎉 Winner Announcement 🎉
              </span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent mb-2 animate-pulse">
              Alice Johnson
            </h1>

            <div className="flex items-center justify-center gap-2 text-purple-200/80 text-lg">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              <span>Congratulations on your victory!</span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
            </div>

            <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
              You have been selected as the winner of our exclusive raffle. Your
              prize awaits—well done! 🏆
            </p>
          </div>

          {/* Action button */}
          <Button
            className="relative group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg rounded-xl border border-purple-400/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Claim Victory
              <Sparkles className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
