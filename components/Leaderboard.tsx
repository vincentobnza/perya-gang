import React from "react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import { LeaderboardTable } from "./ui/leaderboard-table";

export default function Leaderboard() {
  return (
    <Wrapper>
      <Heading
        topText="🏆 Top  Leaderboard"
        title="Grind.."
        title2="Get Rewarded"
        description="Join our exclusive streamer giveaways and get the chance to win epic rewards from merch, supplements, to surprise loot drops!"
      />
      <LeaderboardTable />
    </Wrapper>
  );
}
