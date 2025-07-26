'use client'
import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import RewardList from "./components/RewardList";
import { Pause } from "lucide-react";
import StreamingVideo from "@/components/Streaming-video";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { 
  getStreamerInfo,
  ChangeStreamKey,
  StartLive,
  StopLive
} from "@/app/api/streamer/stream_setup";


import { setToast, setLoading, dismissLoading } from "@/lib/common";
import { useState, useEffect, useRef } from "react";


export default function CreateLive() {


const stream_url = process.env.NEXT_PUBLIC_LIVE_URL;


const queryClient = useQueryClient();

const { data: streamInfo, isLoading: isLoadingEvents } = useQuery({
  queryKey: ["streamInfo"],
  queryFn: getStreamerInfo
});

  useEffect(() => {
    setStreamKey(String(streamInfo?.stream_key ?? ""));
  }, [streamInfo]);

const [localStreaming, setLocalStreaming] = useState(false); // Local streaming state
const [streamKey, setStreamKey] = useState<string>("");
  
let isStreaming = !!streamInfo?.isStream;

const isPreview = !!streamInfo?.isPreview;
const handleChangeKey = async () => {
  try {
    setLoading("Loading...");
    const res = await ChangeStreamKey();
    setStreamKey(res.data.stream_key);
    dismissLoading();
    setToast(res.message, "success");
  } catch (err: any) {
    dismissLoading();
    setToast(err.message, "error");
  }
};


   
const handleStartLive = async () => {
    
    try {
    setLoading("Loading...");
     const res = await StartLive();
    dismissLoading();
    setToast(res.message, "success");
    setLocalStreaming(true);
    isStreaming = true;
  } catch (err: any) {
    dismissLoading();
    setToast(err.message, "error");
  }
};

const handleStopPreview = async () => {
  
   try {
    setLoading("Loading...");
     const res = await StopLive();
    setStreamKey(res.data.stream_key);
    dismissLoading();
    setToast(res.message, "success");
    isStreaming = false;
    setLocalStreaming(false);
  } catch (err: any) {
    setToast(err.message, "error");
  }
};

  return (
    <div className="p-2">
      {/* FIELDS */}
      {!isStreaming && (
        <div className="grid md:grid-cols-2 w-full gap-2">
          <TextField
            label="Stream URL"
            name="stream_url"
            className="w-full mb-4"
            value={stream_url}
          />
          <TextField
            label="Stream Key"
            placeholder="e.g. 5ba90ef3942b18ae4a6110d3900ff85a..."
            name="stream_key"
            value={streamKey}
            className="w-full mb-4"
          />
           <Button size="lg" className="bg-blue-700 text-white font-bold ro"
            onClick={handleChangeKey}
          >Change key
          </Button>
        </div>
      )}
      
      <main className="w-full space-y-4">
        {/* MAIN LIVE */}
       
        {/* Video.js Player */}
        {isPreview && (
          <StreamingVideo streamInfo={streamInfo} />
        )}
        <div className="relative w-full rounded-xl flex items-center justify-center">
          {!isStreaming ? (
            <Button size="lg" className="bg-blue-700 text-white font-bold ro"
              onClick={handleStartLive}
            >
              Start Live
            </Button>
          ) : (
            <Button size="lg" className="bg-red-700 text-white font-bold ro"
              onClick={handleStopPreview}
            >
              Stop Preview
            </Button>
          )}
        </div>
        <RewardList />
      </main>
    </div>
  );
}
