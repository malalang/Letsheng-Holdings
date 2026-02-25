import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Edit,
  MessageSquare,
  Upload,
  CheckCircle,
  Package,
  User,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const getOrderDetails = (id) => {
  // Mock data fetch
  return {
    id: "PRJ-007",
    customer: {
      name: "John Doe",
      company: "Acme Inc.",
      email: "john.doe@acme.com",
    },
    product: "Executive Crewneck T-Shirt",
    quantity: 150,
    total_value: 18750,
    status: "Proof Pending",
    timeline: [
      { stage: "Project Initiated", date: "2023-10-26", done: true },
      { stage: "Artwork Received", date: "2023-10-27", done: true },
      { stage: "Digital Proof Sent", date: "2023-10-28", done: true },
      { stage: "Proof Approved", date: null, done: false },
      { stage: "In Production", date: null, done: false },
      { stage: "Completed & Shipped", date: null, done: false },
    ],
  };
};

const getStatusBadge = (status) => {
  switch (status) {
    case "Proof Pending":
      return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "In Production":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "Completed & Shipped":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export default function OrderDetailPage({ params }) {
  const order = getOrderDetails(params.id);

  return (
    <div className="animate-fade-in text-white">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/dashboard/printing-orders"
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-3" />
          Back to Orders List
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <Upload className="h-4 w-4 mr-2" /> Upload Final Artwork
          </Button>
          <Button className="bg-brand-gold text-brand-navy font-bold hover:bg-brand-gold/90">
            <MessageSquare className="h-4 w-4 mr-2" /> Log a Client Note
          </Button>
        </div>
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Project Dossier: {order.id}
        </h1>
        <p className="text-lg text-gray-400 mt-1">
          For {order.customer.company}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Project Timeline & Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.timeline.map((step) => (
                <div
                  key={step.stage}
                  className={`flex items-center p-3 rounded-lg ${step.done ? "bg-white/5" : "bg-transparent"}`}
                >
                  <CheckCircle
                    className={`h-6 w-6 mr-4 ${step.done ? "text-emerald-400" : "text-gray-600"}`}
                  />
                  <div>
                    <p
                      className={`font-semibold ${step.done ? "text-white" : "text-gray-500"}`}
                    >
                      {step.stage}
                    </p>
                    {step.date && (
                      <p className="text-sm text-gray-400">
                        {new Date(step.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge
                className={`w-full justify-center py-3 text-lg font-bold ${getStatusBadge(order.status)}`}
              >
                {order.status}
              </Badge>
              <Button className="w-full mt-4 bg-white/10 border-white/20 hover:bg-white/20">
                Update Status
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-brand-navy/50 border-brand-gold/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <DetailItem
                icon={<User />}
                label="Client"
                value={`${order.customer.name} (${order.customer.email})`}
              />
              <DetailItem
                icon={<Package />}
                label="Product"
                value={order.product}
              />
              <DetailItem
                icon={<User />}
                label="Quantity"
                value={order.quantity.toLocaleString()}
              />
              <DetailItem
                icon={<DollarSign />}
                label="Total Value"
                value={`R ${order.total_value.toLocaleString()}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center">
    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-gold/10 text-brand-gold rounded-lg mr-3">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {label}
      </p>
      <p className="font-bold text-white text-sm">{value}</p>
    </div>
  </div>
);
