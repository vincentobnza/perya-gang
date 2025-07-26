'use client'
import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import RewardList from "./components/RewardList";
import { Pause } from "lucide-react";
import StreamingVideo from "@/components/Streaming-video";
import { getToken } from "@/lib/hooks/useLocalStorage";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { 
  getStreamerInfo
} from "@/app/api/streamer/stream_setup";

export default function CreateLive() {

    const queryClient = useQueryClient()
  
    const { data: streamInfo, isLoading: isLoadingEvents } = useQuery({
      queryKey: ["streamInfo"],
      queryFn: getStreamerInfo
    });

  console.log("Events:", streamInfo);
  const isStreaming = false; // Replace with actual streaming state

  try {




  } catch(err: any) {

  }

 
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
            name="stream_url"
            className="w-full mb-4"
            value="rtmp://perya-live.socia-dev.com/stream"
            disabled
          />
        </div>
      )}
      <main className="w-full space-y-4">
        {/* MAIN LIVE */}
        <div className="relative w-full rounded-xl flex items-center justify-center">
          {isStreaming ? (
            <StreamingVideo />
          ) : (
            <Button size="lg" className="bg-blue-700 text-white font-bold ro">
              Start Live
            </Button>
          )}
        </div>
        {isStreaming && (
          <div className="w-full max-w-screen-lg flex justify-end items-end gap-4">
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
