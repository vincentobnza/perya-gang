"use client";

import { useRef, useState, useEffect } from "react";
import { type ConfettiRef } from "@/components/magicui/confetti";

type User = {
  name: string;
  username: string;
  avatarUrl: string;
};

type Options = {
  users: User[];
  visibleHeight: number;
  itemHeight: number;
  rollDuration: number;
  onDone: (winner: string) => void;
};

export function useRaffle({
  users,
  visibleHeight,
  itemHeight,
  rollDuration,
  onDone,
}: Options) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<ConfettiRef>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const [isRolling, setIsRolling] = useState(false);
  const [selectedWinner, setSelectedWinner] = useState<string | null>(null);

  const VISIBLE_COUNT = Math.floor(visibleHeight / itemHeight);
  const CENTER_OFFSET = Math.floor(VISIBLE_COUNT / 2);
  const loopedList = Array.from({ length: 20 }, () => users).flat();
  const centerIndex = Math.floor(loopedList.length / 2);

  const startRaffle = () => {
    setIsRolling(true);
    setSelectedWinner(null);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => console.error("Audio error:", e));
    }

    const winnerIndex = Math.floor(Math.random() * users.length);
    const winnerFinalIndex =
      centerIndex - (centerIndex % users.length) + winnerIndex;

    const targetScrollTop = (winnerFinalIndex - CENTER_OFFSET) * itemHeight;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / rollDuration, 1);
      const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
      const easedT = easeOut(t);
      const scrollTop = targetScrollTop * easedT;

      if (scrollRef.current) scrollRef.current.scrollTop = scrollTop;

      if (t < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          if (scrollRef.current) scrollRef.current.scrollTop = targetScrollTop;

          const winnerName = users[winnerIndex].username;
          setSelectedWinner(winnerName);
          setIsRolling(false);

          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }

          onDone(winnerName);
        }, 100);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    scrollRef,
    confettiRef,
    audioRef,
    selectedWinner,
    isRolling,
    startRaffle,
    loopedList,
  };
}
