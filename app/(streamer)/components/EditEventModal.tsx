import TextField from "@/components/auth/TextField";
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
import { CalendarInput } from "./CreateEvent";
import { Plus } from "lucide-react";

export function EditEventDialogModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="text-md font-bold bg-zinc-800">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-zinc-900 border-none outline-none rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit Event</DialogTitle>
          </DialogHeader>
          {/* FIELDS */}
          <div className="mt-6 w-full">
            <TextField
              label="Set Entry Requirements Amount"
              placeholder="entry rewards"
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />

            {/* CALENDAR INPUT */}

            <CalendarInput label="Start Date" placeholder="Select start date" />
            <TextField
              label="Rewards #1"
              placeholder="entry rewards"
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
          </div>
          <DialogFooter className="w-full ">
            <div className="w-full flex justify-end items-center">
              {/* <Button
                size="lg"
                className="bg-zinc-800/50 text-main rounded-full py-3 px-8 "
              >
                Add More Rewards
                <Plus />
              </Button> */}
              <Button
                type="submit"
                size="lg"
                className="bg-main rounded-full py-3 px-8"
              >
                Save Changes
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
