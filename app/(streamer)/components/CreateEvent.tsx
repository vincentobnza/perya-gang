"use client";

import React, { useState, useEffect } from "react";
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
import { Calendar, Plus, Trash2 } from "lucide-react";

interface EventBody {
  event_title: string;
  event_description: string;
  start_date: string;
  end_date: string;
  min_deposit: number;
  rewards: string[]; // ✅ changed to array
}

interface CreateEventProps {
  submitEvent: any;
  isCreating: any;
}

export function CreateEvent({ submitEvent, isCreating }: CreateEventProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minDeposit, setMinDeposit] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rewards, setRewards] = useState<string[]>([]); // ✅ Array of rewards
  const [rewardInput, setRewardInput] = useState(""); // for typing new reward
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!isCreating && open) {
      setOpen(false);
      setTitle("");
      setDescription("");
      setMinDeposit(0);
      setStartDate("");
      setEndDate("");
      setRewards([]);
      setRewardInput("");
      setErrors({});
    }
  }, [isCreating]);

  const handleAddReward = () => {
    if (rewardInput.trim() !== "") {
      setRewards((prev) => [...prev, rewardInput.trim()]);
      setRewardInput("");
    }
  };

  const handleRemoveReward = (index: number) => {
    setRewards((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = "Event title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!endDate) newErrors.endDate = "End date is required.";
    if (rewards.length === 0) newErrors.rewards = "At least one reward is required.";
    if (minDeposit < 0) newErrors.minDeposit = "Minimum deposit cannot be negative.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const body: EventBody = {
      event_title: title,
      event_description: description,
      start_date: startDate,
      end_date: endDate,
      min_deposit: minDeposit,
      rewards,
    };

    console.log("Submitting event:", body);
    submitEvent(body);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-main rounded-full py-3 px-8 flex items-center gap-2"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Event"}
          <Plus />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-zinc-900 border-none outline-none rounded-2xl max-h-[80vh] overflow-y-auto flex flex-col">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl">Create Event</DialogTitle>
          </DialogHeader>

          <div className="mt-6 w-full">
            {/* Event Title */}
            <TextField
              label="Event Title"
              placeholder="Untitled Event"
              value={title}
              onChange={setTitle}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.title && <p className="text-red-500 text-xs mb-2">{errors.title}</p>}

            {/* Event Description */}
            <TextField
              label="Event Description"
              placeholder="Enter event details"
              value={description}
              onChange={setDescription}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.description && <p className="text-red-500 text-xs mb-2">{errors.description}</p>}

            {/* Minimum Deposit */}
            <TextField
              label="Set Minimum Deposit"
              placeholder="0"
              type="number"
              value={minDeposit.toString()}
              onChange={(val) => setMinDeposit(Number(val))}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.minDeposit && <p className="text-red-500 text-xs mb-2">{errors.minDeposit}</p>}

            {/* Start Date */}
            <CalendarInput label="Start Date" placeholder="Select start date" value={startDate} onChange={setStartDate} />
            {errors.startDate && <p className="text-red-500 text-xs mb-2">{errors.startDate}</p>}

            {/* End Date */}
            <CalendarInput label="End Date" placeholder="Select end date" value={endDate} onChange={setEndDate} />
            {errors.endDate && <p className="text-red-500 text-xs mb-2">{errors.endDate}</p>}

            {/* Rewards Section */}
            <label className="text-sm font-medium text-zinc-400">Rewards</label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={rewardInput}
                onChange={(e) => setRewardInput(e.target.value)}
                placeholder="Enter reward"
                className="flex-1 bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 rounded-lg p-3 px-4 h-12 focus:outline-none"
              />
              <Button type="button" onClick={handleAddReward} className="bg-main rounded-lg px-3">
                Add
              </Button>
            </div>

            {errors.rewards && <p className="text-red-500 text-xs mb-2">{errors.rewards}</p>}

            {/* Display Rewards List */}
            <ul className="space-y-2 mb-4">
              {rewards.map((r, i) => (
                <li key={i} className="flex justify-between items-center bg-zinc-800 px-3 py-2 rounded-lg">
                  <span>{r}</span>
                  <button type="button" onClick={() => handleRemoveReward(i)}>
                    <Trash2 className="text-red-500 size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <DialogFooter className="w-full">
            <Button type="submit" size="lg" className="bg-main rounded-full py-3 px-8" disabled={isCreating}>
              {isCreating ? "Creating..." : "Create Event"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface CalendarInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const CalendarInput = ({ label, placeholder, value, onChange }: CalendarInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2 mb-4">
      {label && <label className="text-sm font-medium text-zinc-400">{label}</label>}
      <div className="w-full flex items-center gap-3 relative">
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 rounded-lg p-3 px-4 h-14 focus:outline-none pr-12"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Calendar className="size-5 text-main opacity-60" />
        </span>
      </div>
    </div>
  );
};
