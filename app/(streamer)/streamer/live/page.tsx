import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import React from "react";

export default function CreateLive() {
  return (
    <div>
      {/* FIELDS */}
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

      {/* MAIN LIVE */}
      <main className="w-full bg-zinc-900 border border-zinc-800 rounded-xl min-h-[70vh] flex items-center justify-center">
        <Button size="lg" className="bg-blue-700 text-white font-bold ro">
          Start Live
        </Button>
      </main>
    </div>
  );
}
