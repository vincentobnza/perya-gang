import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

export function ViewAllModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="text-xs opacity-80 cursor-pointer text-zinc-400 font-semibold mr-2  transition-opacity flex items-center gap-x-2 hover:opacity-80">
            <ArrowUpRight className="size-4" />
            View All
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-screen-lg bg-zinc-900 border-none outline-none rounded p-8">
          <DialogHeader>
            <DialogTitle>All Participants</DialogTitle>
            <DialogDescription>
              View all participants in the giveaway.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  );
}
