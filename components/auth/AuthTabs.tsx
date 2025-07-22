import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountDetails from "./AccountDetails";

export function AuthTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="flex-1">
            Account Details
          </TabsTrigger>
          <TabsTrigger value="payment-details" className="flex-1">
            Payment Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full mt-8">
          <AccountDetails />
        </TabsContent>
        <TabsContent value="payment-details" className="w-full"></TabsContent>
      </Tabs>
    </div>
  );
}

// ACCOUNT DETAILS
