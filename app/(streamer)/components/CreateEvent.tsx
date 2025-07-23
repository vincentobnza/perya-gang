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
import { Calendar, Plus } from "lucide-react";

export function CreateEvent() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-main rounded-full py-3 px-8 self-start md:self-auto"
          >
            Create Event
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-zinc-900 border-none outline-none rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Events</DialogTitle>
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
            <div className="w-full flex justify-between items-center">
              <Button
                size="lg"
                className="bg-zinc-800/50 text-main rounded-full py-3 px-8 "
              >
                Add More Rewards
                <Plus />
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-main rounded-full py-3 px-8"
              >
                Add Event
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

const CalendarInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-zinc-400">{label}</label>
      )}
      <div className="w-full min-w-0 flex items-center gap-3 mb-4 relative">
        <input
          type="time"
          placeholder={placeholder}
          className="w-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 rounded-lg p-3 px-4 h-14 focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-[#BDFC06] pr-12 [&::-webkit-calendar-picker-indicator]:hidden"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Calendar className="size-5 text-main opacity-60" />
        </span>
      </div>
    </div>
  );
};
