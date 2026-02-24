
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Edit, Archive, User, Calendar, FileText, DollarSign, ListChecks } from "lucide-react";
import Link from "next/link";

const getPropertyDetails = (id) => {
  // Mock data fetch.
  return {
    id: "PROP-001",
    title: "Executive Waterfront Residence",
    location: "V&A Waterfront, Cape Town",
    status: "Occupied",
    monthly_rate: 35000,
    tenant: {
        name: "Mr. Johnathan Doe",
        lease_start: "2023-03-01",
        lease_end: "2024-02-29",
        contact: "john.doe@example.com"
    },
    financials: {
        last_payment: "2023-10-01",
        amount: 35000,
        next_due: "2023-11-01"
    }
  };
};

const DetailRow = ({ label, value, icon }) => (
    <div className="flex items-start">
        <div className="w-8 h-8 flex items-center justify-center bg-brand-gold/10 text-brand-gold rounded-lg mr-4">{icon}</div>
        <div>
            <p className="text-sm font-semibold text-gray-400">{label}</p>
            <p className="font-bold text-white">{value}</p>
        </div>
    </div>
)

export default function EditPropertyPage({ params }) {
  const property = getPropertyDetails(params.id);

  return (
    <div className="animate-fade-in text-white">
       <div className="flex justify-between items-center mb-8">
            <Link href="/dashboard/properties" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="h-5 w-5 mr-3" />
                Back to Properties List
            </Link>
            <div className="flex items-center gap-4">
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    <Edit className="h-4 w-4 mr-2"/> Edit Property
                </Button>
                <Button variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30">
                    <Archive className="h-4 w-4 mr-2"/> Archive Listing
                </Button>
            </div>
       </div>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">{property.title}</h1>
        <p className="text-lg text-gray-400 mt-1">{property.id} &bull; {property.location}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
            <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
                <CardHeader><CardTitle>Lease & Tenant Details</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                    <DetailRow icon={<User/>} label="Current Tenant" value={property.tenant.name} />
                    <DetailRow icon={<Calendar/>} label="Lease Period" value={`${new Date(property.tenant.lease_start).toLocaleDateString()} - ${new Date(property.tenant.lease_end).toLocaleDateString()}`} />
                    <DetailRow icon={<FileText/>} label="Lease Agreement" value={<Link href="#" className="underline hover:text-brand-gold">View Document</Link>} />
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 w-full col-span-2 justify-center py-2">Lease Active</Badge>
                </CardContent>
            </Card>

             <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
                <CardHeader><CardTitle>Financial Overview</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                   <DetailRow icon={<DollarSign/>} label="Monthly Rate" value={`R ${property.monthly_rate.toLocaleString()}`} />
                   <DetailRow icon={<DollarSign/>} label="Last Payment Received" value={`R ${property.financials.amount.toLocaleString()} on ${new Date(property.financials.last_payment).toLocaleDateString()}`} />
                   <DetailRow icon={<Calendar/>} label="Next Payment Due" value={new Date(property.financials.next_due).toLocaleDateString()} />
                </CardContent>
            </Card>
        </div>

        <div className="space-y-8">
            <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
                 <CardHeader><CardTitle>Property Status</CardTitle></CardHeader>
                 <CardContent>
                    <Badge className="w-full justify-center py-3 text-lg font-bold bg-red-500/20 text-red-400 border-red-500/50">{property.status}</Badge>
                    <Button className="w-full mt-4 bg-white/10 border-white/20 hover:bg-white/20">Change Status</Button>
                 </CardContent>
            </Card>
             <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
                 <CardHeader><CardTitle>Management Actions</CardTitle></CardHeader>
                 <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-white/10 border-white/20 hover:bg-white/20"><ListChecks className="h-4 w-4 mr-3"/>Schedule Maintenance</Button>
                    <Button className="w-full justify-start bg-white/10 border-white/20 hover:bg-white/20"><FileText className="h-4 w-4 mr-3"/>Upload New Document</Button>
                 </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
