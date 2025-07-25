"use client";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Giveaway from "@/components/Giveaways";
import Leaderboard from "@/components/Leaderboard";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <>
      <div className="App space-y-8 ">
        <Hero />
        <Main />
        <Giveaway />
        <Leaderboard />
        <Cta />
      </div>
    </>
  );
}
