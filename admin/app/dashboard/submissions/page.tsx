import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaseApplicationsTable } from "./LeaseApplicationsTable";
import { BrandingInquiriesTable } from "./BrandingInquiriesTable";

export default function SubmissionsPage() {
  return (
    <Tabs defaultValue="leases">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="leases">Lease Applications</TabsTrigger>
        <TabsTrigger value="branding">Branding Inquiries</TabsTrigger>
      </TabsList>
      <TabsContent value="leases">
        <LeaseApplicationsTable />
      </TabsContent>
      <TabsContent value="branding">
        <BrandingInquiriesTable />
      </TabsContent>
    </Tabs>
  );
}
