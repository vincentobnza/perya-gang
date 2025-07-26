import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Radio } from "lucide-react";
import React from "react";

export default function LiveStream() {
  return (
    <div className="w-full">
      <SegmentControls />
    </div>
  );
}

const LiveStreamContent = () => {
  return (
    <div className="w-full">
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

      <div className="w-full min-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
        <Button className="bg-blue-700 text-white" size="lg">
          Start Live
        </Button>
      </div>
    </div>
  );
};

const SegmentControls = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="live-stream">
        <TabsList className="max-w-sm">
          <TabsTrigger value="live-stream">
            <Radio />
            Live Streaming
          </TabsTrigger>
          <TabsTrigger value="embedd-links">
            <Link />
            Embedd Links
          </TabsTrigger>
        </TabsList>
        <TabsContent value="live-stream" className="mt-5">
          <LiveStreamContent />
        </TabsContent>
        <TabsContent value="embedd-links" className="mt-5">
          <EmbeddLinksContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const EmbeddLinksContent = () => {
  return (
    <div className="w-full">
      <TextField
        label="Embed Link"
        placeholder="e.g. https://your-embed-link.com"
        className="w-full mb-4"
      />
      <div className="w-full min-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
        <Button className="bg-blue-700 text-white" size="lg">
          Start Live
        </Button>
      </div>
    </div>
  );
};
