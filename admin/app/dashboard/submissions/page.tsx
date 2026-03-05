import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrandingInquiriesTable } from "./BrandingInquiriesTable";
import { LeaseApplicationsTable } from "./LeaseApplicationsTable";

export default function SubmissionsPage() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Submissions Hub</h1>
          <p className="text-muted-foreground">
            Review and manage all incoming requests.
          </p>
        </div>
      </div>
      <Tabs defaultValue="leases">
        <TabsList>
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
    </div>
  );
}
