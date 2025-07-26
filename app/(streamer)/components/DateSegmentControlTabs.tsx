"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export function DateSegmentControlTabs({ value, onChange }: Props) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs value={value} onValueChange={onChange}>
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
