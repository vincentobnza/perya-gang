import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

export function RaffleScrollModal() {
  return (
    <Dialog open={false}>
      <DialogContent className="sm:max-w-xl bg-zinc-900 border-none p-5 [&>button]:hidden rounded-lg">
        <DialogHeader className="text-center">
          {DUMP_DATA.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 mb-1  p-3 rounded-lg"
            >
              <img
                src={item.avatarUrl}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-zinc-200 text-lg">{item.name}</h1>
                <p className="text-xs opacity-60">@{item.username}</p>
              </div>
            </div>
          ))}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const DUMP_DATA = [
  {
    name: "John Doe",
    avatarUrl: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    username: "johndoe1245353",
  },
  {
    name: "Jane Smith",
    avatarUrl: "https://cdn-icons-png.flaticon.com/128/4140/4140060.png",
    username: "johndoe1245353",
  },
  {
    name: "Alice Johnson",
    avatarUrl: "https://cdn-icons-png.flaticon.com/128/547/547413.png",
    username: "johndoe1245353",
  },
];
