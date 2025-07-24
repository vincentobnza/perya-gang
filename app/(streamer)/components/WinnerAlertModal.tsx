import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
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
      <DialogContent className="sm:max-w-xl flex flex-col justify-center items-center bg-zinc-900 border-none p-8 outline-none rounded-xl [&>button]:hidden">
        <div className="p-5 bg-zinc-800/40 rounded-full">
          <div className="p-5 rounded-full bg-zinc-800/20">
            <Image
              src="/confetti.png"
              alt="Confetti"
              width={100}
              height={100}
              className="mx-auto mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <p className="text-sm font-semibold opacity-60">Winner</p>
          <h1 className="text-4xl font-bold mb-3">John Doe</h1>
          <h3 className="text-sm opacity-60">
            Congratulations! You have won the raffle. 🏆
          </h3>

          <DialogClose>
            <Button className="mt-10 uppercase h-10 bg-main" size="lg">
              Done
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
