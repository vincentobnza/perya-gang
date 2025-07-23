import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, CheckCircle } from "lucide-react";

export function JoinSuccess({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  setTimeout(() => {
    onClose();
  }, 3000);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-none p-10 [&>button]:hidden rounded-4xl">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 size-14 bg-main text-black rounded-full flex items-center justify-center">
            <Check className="w-8 h-8" />
          </div>
          <DialogTitle className="text-2xl mb-5 text-center">
            Successfully Joined!
          </DialogTitle>
          <DialogDescription className="text-md text-zinc-400 text-center font-medium">
            You are now qualified to <br /> entered the raffle!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
