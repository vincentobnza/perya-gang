import TextField from "@/components/auth/TextField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export default function AddRewardsModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="lg" className="bg-main">
            Add Rewards
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-zinc-900 border-none outline-none rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Reward</DialogTitle>
          </DialogHeader>
          <div className="mt-6 w-full">
            <TextField
              label="Reward"
              placeholder="Reward #1"
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {/* CALENDAR INPUT */}
          </div>
          <DialogFooter className="w-full ">
            <div className="w-full flex justify-end items-center">
              <Button
                type="submit"
                size="lg"
                className="bg-main rounded-full py-3 px-8"
              >
                Add Reward
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
