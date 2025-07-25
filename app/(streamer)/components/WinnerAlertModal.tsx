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
      <DialogContent className="sm:max-w-xl flex flex-col justify-center items-center bg-gradient-to-br from-zinc-900 via-zinc-900/10 to-zinc-900 border border-zinc-500/20 p-0 outline-none rounded-2xl [&>button]:hidden overflow-hidden">
        <DialogTitle className="sr-only">Winner Announcement</DialogTitle>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-lime-400/20 to-lime-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-lime-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-lime-400/5 to-lime-400/5 rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-center">
          {/* Main trophy section */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-400 rounded-full blur-lg opacity-30 animate-pulse scale-125"></div>
            <div className="relative p-8 bg-gradient-to-br from-lime-500/20 to-lime-500/20 backdrop-blur-sm rounded-full border border-lime-400/30 shadow-2xl">
              <div className="p-6 rounded-full bg-gradient-to-br from-lime-600/30 to-lime-600/30 backdrop-blur-sm border border-lime-300/20">
                <Trophy className="w-16 h-16 text-lime-400 mx-auto " />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500/20 to-lime-500/20 backdrop-blur-sm rounded-full border border-lime-400/30">
              <span className="text-sm font-semibold text-lime-200  tracking-wider">
                Winner Announcement
              </span>
            </div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent mb-2 animate-pulse">
              Alice Johnson
            </h1>

            <div className="flex items-center justify-center gap-2 text-lime-200/80 text-sm font-semibold">
              <span>Congratulations on your victory!</span>
            </div>
          </div>

          {/* Action button */}
          <Button
            className="mt-5 relative group px-8 py-5 bg-gradient-to-r from-lime-600 to-lime-600 hover:from-lime-700 hover:to-lime-700 text-white font-semibold text-lg border border-lime-400/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            DONE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
