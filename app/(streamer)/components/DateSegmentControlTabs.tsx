import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DateSegmentControlTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="today">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="tommorrow">Tommorrow</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="today"></TabsContent>
        <TabsContent value="tommorrow"></TabsContent>
        <TabsContent value="upcoming"></TabsContent>
      </Tabs>
    </div>
  );
}
