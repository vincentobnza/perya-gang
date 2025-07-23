"use client";

import { create } from "zustand";
import { useSearchParams } from "next/navigation";

type LiveParams = {
  streamerId: string;
  streamKey: string;
  streamUrl: string;
};
export const useStreamerStore = create<{
  liveParams: LiveParams | null;
  setLiveParams: (params: LiveParams) => void;
  handleStartLive: () => void;
}>((set) => ({
  liveParams: null,
  setLiveParams: (params: LiveParams) => {
    set({ liveParams: params });
  },
  handleStartLive: () => {
    const searchParams = useSearchParams();
    set({
      liveParams: {
        streamerId: searchParams.get("streamerId") || "",
        streamKey: searchParams.get("streamKey") || "",
        streamUrl: searchParams.get("streamUrl") || "",
      },
    });
  },
}));
