import { Avatar } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Search } from "lucide-react";
import React from "react";

const users = [
  {
    id: "1223456",
    name: "Kin Patrick",
    cashIn: 100,
    avatarUrl: "/avatar1.png",
  },
  {
    id: "132435",
    name: "Dennis Onay",
    cashIn: 450,
    avatarUrl: "/avatar2.png",
  },
  {
    id: "24353",
    name: "Mark Raymundo",
    cashIn: 300,
    avatarUrl: "/avatar3.png",
  },
  {
    id: "342534",
    name: "John Doe",
    cashIn: 400,
    avatarUrl: "/avatar4.png",
  },
  {
    id: "456789",
    name: "Jane Smith",
    cashIn: 200,
    avatarUrl: "/avatar5.png",
  },
  {
    id: "567890",
    name: "Alice Johnson",
    cashIn: 100,
    avatarUrl: "/avatar3.png",
  },
];

export default function ParticipantsTable() {
  return (
    <div className="mt-10 w-full relative">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Participants</h1>
          <p className="text-sm text-zinc-400">
            Overview of all registered participants.
          </p>
        </div>

        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search participants..."
            className="px-6 h-12 placeholder:text-xs rounded-full bg-zinc-900 ring-2 ring-zinc-800 focus:ring-2 focus:ring-[#bdfc06] placeholder:text-zinc-500 text-white focus:outline-none focus:border-[#CC00FF] w-full pr-12"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
            <Search className="size-5 text-main" />
          </span>
        </div>
      </div>

      <Table className="mt-5 w-full border border-zinc-800/50 rounded-xl">
        <TableHeader className="rounded-lg">
          <TableRow className="bg-zinc-900 border border-zinc-800 text-white">
            <TableHead className="w-[100px] font-bold p-4 text-xs md:text-sm text-white">
              RANK
            </TableHead>
            <TableHead className="font-bold p-4 text-xs md:text-sm text-white">
              MEMBER
            </TableHead>
            <TableHead className="font-bold p-4 text-xs md:text-sm text-center text-white">
              CASH IN
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow key={user.id}>
              <TableCell className="w-[200px] text-zinc-500 font-bold text-sm p-4">
                user@{user.id}
              </TableCell>
              <TableCell className="p-4">
                <div className="flex items-center gap-x-4">
                  <Avatar className="size-6">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                  </Avatar>
                  <h1 className="text-sm font-semibold">{user.name}</h1>
                </div>
              </TableCell>
              <TableCell className="text-sm font-bold text-[#CC00FF] text-center p-4">
                ₱ {user.cashIn}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
