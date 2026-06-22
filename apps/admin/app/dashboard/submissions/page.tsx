import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getBrandingInquiries,
  getContactMessages,
  getLeaseApplications,
} from "./actions";
import { BrandingInquiriesTable } from "./BrandingInquiriesTable";
import { ContactMessagesTable } from "./ContactMessagesTable";
import { LeaseApplicationsTable } from "./LeaseApplicationsTable";

export default async function SubmissionsPage() {
  const [applications, inquiries, contactMessages] = await Promise.all([
    getLeaseApplications(),
    getBrandingInquiries(),
    getContactMessages(),
  ]);

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
          <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="leases">
          <LeaseApplicationsTable applications={applications} />
        </TabsContent>
        <TabsContent value="branding">
          <BrandingInquiriesTable inquiries={inquiries} />
        </TabsContent>
        <TabsContent value="contacts">
          <ContactMessagesTable messages={contactMessages} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
