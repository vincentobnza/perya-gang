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

const users = [
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
  {
    id: "456789",
    name: "Jane Smith",
    user: 25000,
  },
  {
    id: "567890",
    name: "Alice Johnson",
    user: 15000,
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
        <DialogContent className="sm:max-w-screen-lg max-h-[80vh] overflow-auto bg-zinc-900 outline-none rounded-xl border border-zinc-800 p-8 ">
          <DialogHeader>
            <DialogTitle>All Participants</DialogTitle>
            <DialogDescription>
              View all participants in the giveaway.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 w-full relative">
            <Table className="w-full border border-zinc-800/50 rounded-lg">
              {/* TABLE CONTENT */}
              <TableHeader className="rounded-lg">
                <TableRow className="bg-main border border-lime-400">
                  <TableHead className="w-[100px] font-bold p-2 text-md text-xs md:text-sm">
                    RANK
                  </TableHead>
                  <TableHead className="font-bold p-2 text-md text-xs md:text-sm">
                    MEMBER
                  </TableHead>
                  <TableHead className="font-bold p-2 text-md text-xs md:text-sm text-center">
                    USER
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((invoice, idx) => (
                  <TableRow key={invoice.id}>
                    <TableCell className=" text-main font-bold text-sm">
                      # {idx + 1}
                    </TableCell>
                    <TableCell>
                      <h1 className="text-sm font-semibold">{invoice.name}</h1>
                      <p className="text-xs md:text-sm opacity-50">
                        user@{invoice.id}
                      </p>
                    </TableCell>
                    <TableCell className="text-sm font-bold text-main text-center p-2">
                      {invoice.user}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none rounded-b-lg"></div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
