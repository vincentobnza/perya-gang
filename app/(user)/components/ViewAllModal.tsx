import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";

const invoices = [
  {
    id: "1223456",
    name: "Kin Patrick",
    user: 10000,
  },
  {
    id: "132435",
    name: "Dennis Onay",
    user: 4657,
  },
  {
    id: "24353",
    name: "Mark Raymundo",
    user: 3000,
  },
  {
    id: "342534",
    name: "John Doe",
    user: 40000,
  },
];

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

          <div className="w-full">
            <Table className="w-full">
              {/* TABLE CONTENT */}
              <TableHeader className="rounded-lg">
                <TableRow className="bg-[#CC00FF] hover:bg-[#CC00FF]/90 transition-colors">
                  <TableHead className="w-[100px] text-white font-bold p-4 text-md md:text-lg">
                    RANK
                  </TableHead>
                  <TableHead className="font-bold text-white p-4 text-md md:text-lg">
                    MEMBER
                  </TableHead>
                  <TableHead className="font-bold text-white p-4 text-md md:text-lg">
                    USER
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice, idx) => (
                  <TableRow key={invoice.id}>
                    <TableCell className=" text-main font-bold text-lg p-2">
                      # {idx + 1}
                    </TableCell>
                    <TableCell className=" p-2">
                      <h1 className="text-lg font-semibold">{invoice.name}</h1>
                      <p className="text-xs md:text-sm opacity-50">
                        user@{invoice.id}
                      </p>
                    </TableCell>
                    <TableCell className="text-lg font-bold text-[#CC00FF] p-2">
                      {invoice.user}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
