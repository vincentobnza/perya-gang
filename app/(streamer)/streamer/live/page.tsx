import { Button } from "@/components/ui/button";
import RewardList from "./components/RewardList";
import { Pause } from "lucide-react";
import StreamingVideoDesktop from "@/app/(user)/components/StreamingVideoDesktop";
import LiveStream from "./components/LiveStream";
export default function CreateLive() {
  const isStreaming = false; // Replace with actual streaming state
  return (
    <div className="p-2">
      {/* FIELDS */}
      {isStreaming ? <StreamingVideoDesktop /> : <LiveStream />}
      <main className="w-full space-y-4">
        {isStreaming && (
          <div className="w-full max-w-screen-xl flex justify-end items-end gap-4">
            <Button size="lg">
              <Pause />
              Pause
            </Button>
            <Button size="lg">
              <span className="size-2.5 rounded bg-red-500"></span>
              Stop Streaming
            </Button>
          </div>
        )}
        <RewardList />
      </main>
    </div>
  );
}
