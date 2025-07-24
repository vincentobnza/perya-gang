import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

type WinningLog = {
  name: string;
  username: string;
  winnings: string;
};

type WinningLogProps = {
  log: WinningLog;
};

const WinningLogItem: React.FC<WinningLogProps> = ({ log }) => {
  return (
    <div className="p-4 bg-zinc-800/60 border border-zinc-800 rounded-lg shadow-m flex items-center justify-between">
      <div className="flex items-start gap-3">
        <Avatar>
          <AvatarImage src="/avatar4.png" alt="User Avatar" />
        </Avatar>
        <div>
          <h3 className="text-lg font-medium">{log.name}</h3>
          <span className="text-xs text-zinc-400">{log.username}</span>
        </div>
      </div>
      <div className="mr-5">
        <span className="text-sm md:text-lg text-main font-bold">
          {log.winnings}
        </span>
      </div>
    </div>
  );
};

// DUMMY WINNING LOGS DATA
const WINNING_LOGS: WinningLog[] = [
  {
    name: "John Layda",
    username: "@johnlayda",
    winnings: "GCash 500",
  },
  {
    name: "John Layda",
    username: "@johnlayda",
    winnings: "GCash 500",
  },
  {
    name: "John Layda",
    username: "@johnlayda",
    winnings: "GCash 2500",
  },
];

export default function WinningLogs() {
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-main">
          Winning Logs
        </h1>
        <p className="text-sm opacity-70">View your recent wins and rewards.</p>
      </div>
      <div className="space-y-3">
        {WINNING_LOGS.map((log, idx) => (
          <WinningLogItem key={idx} log={log} />
        ))}
      </div>

      <Button className="w-full h-12 bg-zinc-900/50 text-main border border-zinc-800 rounded text-md">
        View More
      </Button>
    </div>
  );
}
