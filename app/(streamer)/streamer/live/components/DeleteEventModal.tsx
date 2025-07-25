import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import React from "react";

export default function DeleteEventModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-zinc-800 rounded-lg text-red-400 size-9">
            <Trash />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-zinc-900 outline-none rounded-2xl border border-zinc-700/50">
          <DialogHeader>
            <DialogTitle className="text-xl">Delete Reward?</DialogTitle>
          </DialogHeader>

          <div className="w-ful rounded-lg mb-4">
            <p className="text-sm text-zinc-400">
              Are you sure you want to delete this event? This action cannot be
              undone.
            </p>
          </div>
          <DialogFooter className="w-full pt-5 border-t border-zinc-700/50">
            <Button className="bg-zinc-900/20 border border-zinc-400/10 text-zinc-300 rounded-lg">
              Cancel
            </Button>
            <Button className="bg-orange-600/90 text-white rounded-lg border border-orange-300">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
