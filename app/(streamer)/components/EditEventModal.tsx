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
import { CalendarInput } from "./CreateEvent";
import { formatDateForInput } from "@/lib/formatDateForInput";
import { Trash2 } from "lucide-react";

interface Reward {
  id?: string;
  name: string;
}

interface EventBody {
  event_id: string;
  event_title: string;
  event_description: string;
  start_date: string;
  end_date: string;
  min_deposit: number;
  rewards: Reward[];
}

interface EditEventDialogModalProps {
  event: EventBody;
  onSave: (data: EventBody) => void;
  isSaving: any;
}

export function EditEventDialogModal({
  event,
  onSave,
  isSaving,
}: EditEventDialogModalProps) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(event.event_title);
  const [description, setDescription] = useState(event.event_description);
  const [minDeposit, setMinDeposit] = useState(event.min_deposit);
  const [startDate, setStartDate] = useState(formatDateForInput(event.start_date));
  const [endDate, setEndDate] = useState(formatDateForInput(event.end_date));

  // ✅ Rewards now store id + name
  const [rewards, setRewards] = useState<Reward[]>(event.rewards || []);
  const [rewardInput, setRewardInput] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!isSaving && open) {
      setOpen(false);
      setErrors({});
    }
  }, [isSaving]);

  const handleAddReward = () => {
    if (rewardInput.trim()) {
      setRewards((prev) => [...prev, { name: rewardInput.trim() }]); // New reward has no ID
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

    // ✅ Pass id + name to backend
    onSave({
      event_id: event.event_id,
      event_title: title,
      event_description: description,
      start_date: startDate,
      end_date: endDate,
      min_deposit: minDeposit,
      rewards: rewards.map((r) => ({
        id: r.id,
        name: r.name,
      })),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-md font-bold bg-zinc-800">Edit</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-zinc-900 border-none rounded-2xl max-h-[80vh] overflow-y-auto flex flex-col">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit Event</DialogTitle>
          </DialogHeader>

          <div className="mt-6 w-full">
            <TextField
              label="Event Title"
              placeholder="Untitled Event"
              value={title}
              onChange={setTitle}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.title && <p className="text-red-500 text-xs mb-2">{errors.title}</p>}

            <TextField
              label="Event Description"
              placeholder="Enter event details"
              value={description}
              onChange={setDescription}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.description && <p className="text-red-500 text-xs mb-2">{errors.description}</p>}

            <TextField
              label="Set Minimum Deposit"
              placeholder="0"
              type="number"
              value={minDeposit.toString()}
              onChange={(val) => setMinDeposit(Number(val))}
              className="w-full mb-4 bg-zinc-800/50 border border-zinc-700/50"
            />
            {errors.minDeposit && <p className="text-red-500 text-xs mb-2">{errors.minDeposit}</p>}

            <CalendarInput
              label="Start Date"
              placeholder="Select start date"
              value={startDate}
              onChange={setStartDate}
            />
            {errors.startDate && <p className="text-red-500 text-xs mb-2">{errors.startDate}</p>}

            <CalendarInput
              label="End Date"
              placeholder="Select end date"
              value={endDate}
              onChange={setEndDate}
            />
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
              <Button
                type="button"
                onClick={handleAddReward}
                className="bg-main rounded-lg px-3"
              >
                Add
              </Button>
            </div>

            {errors.rewards && <p className="text-red-500 text-xs mb-2">{errors.rewards}</p>}

            <ul className="space-y-2 mb-4">
              {rewards.map((r, i) => (
                <li
                  key={r.id ?? i}
                  className="flex justify-between items-center bg-zinc-800 px-3 py-2 rounded-lg"
                >
                  <span>{r.name}</span>
                  <button type="button" onClick={() => handleRemoveReward(i)}>
                    <Trash2 className="text-red-500 size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <DialogFooter className="w-full">
            <Button
              type="submit"
              size="lg"
              className="bg-main rounded-full py-3 px-8"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
