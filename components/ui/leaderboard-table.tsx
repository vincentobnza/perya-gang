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
    id: "1223456",
    name: "Dennis Onay",
    user: 4657,
  },
  {
    id: "1223456",
    name: "Mark Raymundo",
    user: 3000,
  },
  {
    id: "1223456",
    name: "John Doe",
    user: 40000,
  },
];

export function LeaderboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">RANK</TableHead>
          <TableHead>MEMBER</TableHead>
          <TableHead>USER</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, idx) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.user}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
