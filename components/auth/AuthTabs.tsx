import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountDetails from "./AccountDetails";

export function AuthTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account Details</TabsTrigger>
          <TabsTrigger value="payment-details">Payment Details</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full">
          <AccountDetails />
        </TabsContent>
        <TabsContent value="payment-details"></TabsContent>
      </Tabs>
    </div>
  );
}

// ACCOUNT DETAILS
