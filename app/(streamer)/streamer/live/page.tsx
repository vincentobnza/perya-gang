import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import RewardList from "./components/RewardList";
import { CircleStop, Pause } from "lucide-react";
export default function CreateLive() {
  const isStreaming = false; // Replace with actual streaming state
  return (
    <div className="p-2">
      {/* FIELDS */}
      {isStreaming ? (
        ""
      ) : (
        <div className="grid md:grid-cols-2 w-full gap-2">
          <TextField
            label="Stream Key"
            placeholder="e.g. 5ba90ef3942b18ae4a6110d3900ff85a..."
            className="w-full mb-4"
          />
          <TextField
            label="Stream URL"
            placeholder="e.g. rtmp://live-api.socia-dev.com/stream"
            className="w-full mb-4"
          />
        </div>
      )}
      <main className="w-full space-y-4">
        {/* MAIN LIVE */}
        <div className="relative w-full bg-zinc-900 border border-zinc-800 rounded-xl min-h-[70vh] flex items-center justify-center">
          {isStreaming ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/HfGnW_7JaTY?si=Y4bvYZl_CTHHahnV&autoplay=1&mute=1&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <Button size="lg" className="bg-blue-700 text-white font-bold ro">
              Start Live
            </Button>
          )}
        </div>

        {isStreaming && (
          <div className="w-full flex justify-end items-end gap-4">
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
