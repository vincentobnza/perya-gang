import { Button } from "@/components/ui/button";
import { Clock, Gift } from "lucide-react";

export default function ActivityLogs() {
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-main">
          Activity Logs
        </h1>
        <p className="text-sm opacity-70">
          View your recent activity logs here.
        </p>
      </div>

      <div className="w-full flex flex-col gap-2">
        {ACTIVITY_LOGS.map((log, idx) => (
          <ActivityLogCard
            key={idx}
            title={log.title}
            endLive={log.endLive}
            reward={log.reward}
          />
        ))}
      </div>
      <Button className="w-full h-12 bg-zinc-900/50 text-main border border-zinc-800 rounded text-md">
        View More
      </Button>
    </div>
  );
}

// dummy data for activity logs - for demonstration purposes
const ACTIVITY_LOGS = [
  {
    title: "Surprise Box Showdown",
    endLive: "3:37 PM",
    reward: "₱500 GCash + Surprise Mystery Box",
  },

  {
    title: "Mystery Box Mega Hour",
    endLive: "4:00 PM",
    reward: "₱1000 GCash + Mystery Box",
  },
  {
    title: "Golden Hour Raffle",
    endLive: "5:00 PM",
    reward: "₱2000 GCash + Golden Mystery Box",
  },
];

// card component for activity logs

function ActivityLogCard({ title, endLive, reward }: any) {
  return (
    <div className=" bg-zinc-800/50 border border-zinc-800 rounded-2xl p-5 space-y-2">
      <div className="w-full border-b border-zinc-800 pb-4">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      <div className="flex items-center justify-start gap-2">
        <div className="p-2 rounded-full grid place-items-center bg-zinc-800">
          <Clock className="text-zinc-300 size-4" />
        </div>

        <h3 className="text-purple-500 font-semibold">End Live {endLive}</h3>
      </div>
      <div className="flex items-center justify-start gap-2">
        <div className="p-2 rounded-full grid place-items-center bg-zinc-800">
          <Gift className="text-zinc-300 size-4" />
        </div>
        <h3 className="font-semibold text-zinc-200">{reward}</h3>
      </div>
    </div>
  );
}
