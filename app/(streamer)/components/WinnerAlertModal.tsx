import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

export default function WinnerAlertModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-xl bg-zinc-900 border-none p-8 outline-none rounded-4xl [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl mb-4 ">
            Winner is Selected!
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
