import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export function LeaderboardTable() {
  return (
    <div className="relative">
      {/* overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 rounded-lg"></div>

      {/* table */}
      <Table className="w-full">
        {/* TABLE CONTENT */}
        <TableHeader className="rounded-lg">
          <TableRow className="bg-[#CC00FF]">
            <TableHead className="w-[100px] text-white font-bold">
              RANK
            </TableHead>
            <TableHead className="font-bold text-white">MEMBER</TableHead>
            <TableHead className="font-bold text-white">USER</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, idx) => (
            <TableRow key={invoice.id}>
              <TableCell className=" text-[#bdfc06] font-bold text-lg">
                # {idx + 1}
              </TableCell>
              <TableCell>
                <h1 className="text-lg font-semibold">{invoice.name}</h1>
                <p className="text-sm opacity-60">user@{invoice.id}</p>
              </TableCell>
              <TableCell className="text-lg font-bold text-[#CC00FF]">
                {invoice.user}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
