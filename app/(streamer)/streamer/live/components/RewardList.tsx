import { Button } from "@/components/ui/button";
import React from "react";
import RewardCard from "./RewardCard";
import AddRewardsModal from "@/app/(streamer)/components/AddRewardsModal";

export default function RewardList() {
  return (
    <div className="mt-8 w-full space-y-4">
      <Header />
      <main className="w-full space-y-2">
        {rewards.map((reward, index) => (
          <RewardCard key={index} rewardName={reward} />
        ))}
      </main>
    </div>
  );
}

const rewards = [
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
  "	₱5,000 GCash + Surprise Mystery Box",
];

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        List Of Rewards
      </h1>
      {/* CTA's */}
      <div className="flex items-center gap-2">
        <Button size="lg">Edit</Button>
        <AddRewardsModal />
      </div>
    </div>
  );
};
