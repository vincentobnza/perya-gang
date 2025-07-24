import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import TextField from "@/components/auth/TextField";

export default function EditRewardModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-zinc-800 rounded-lg text-zinc-400 size-9">
            <Pen />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-zinc-900 outline-none rounded-2xl border border-zinc-700/50">
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Reward</DialogTitle>
          </DialogHeader>

          <TextField
            label="Reward"
            placeholder="Reward #1"
            className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
          />
          <DialogFooter className="w-full pt-5 border-t border-zinc-700/50">
            <Button className="bg-zinc-900/20 border border-zinc-400/10 text-zinc-300 rounded-lg">
              Cancel
            </Button>
            <Button className="bg-main rounded-lg">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
