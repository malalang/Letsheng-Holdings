import { 
  ArrowLeft,
  CheckCircle,
  DollarSign,
  MessageSquare,
  Package,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const getOrderDetails = (_id: string) => {
  // Mock data fetch. In a real app, you'd fetch this from an API.
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

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Proof Pending":
      return "secondary";
    case "In Production":
      return "default";
    case "Completed & Shipped":
      return "default";
    default:
      return "outline";
  }
};

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = getOrderDetails(params.id);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/dashboard/printing-orders"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-3" />
          Back to Orders List
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" /> Upload Final Artwork
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" /> Log a Client Note
          </Button>
        </div>
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Project Dossier: {order.id}
        </h1>
        <p className="text-lg text-gray-600 mt-1">For {order.customer.company}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline & Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.timeline.map((step) => (
                <div
                  key={step.stage}
                  className={`flex items-center p-3 rounded-lg ${
                    step.done ? "bg-gray-50" : "bg-transparent"
                  }`}
                >
                  <CheckCircle
                    className={`h-6 w-6 mr-4 ${
                      step.done ? "text-emerald-500" : "text-gray-400"
                    }`}
                  />
                  <div>
                    <p
                      className={`font-semibold ${
                        step.done ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {step.stage}
                    </p>
                    {step.date && (
                      <p className="text-sm text-gray-500">
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
          <Card>
            <CardHeader>
              <CardTitle>Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge
                className={`w-full justify-center py-3 text-lg font-bold`}
                variant={getStatusBadgeVariant(order.status)}
              >
                {order.status}
              </Badge>
              <Button className="w-full mt-4" variant="outline">
                Update Status
              </Button>
            </CardContent>
          </Card>
          <Card>
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

const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}) => (
  <div className="flex items-center">
    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-Blue/10 text-brand-Blue rounded-lg mr-3">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="font-bold text-gray-800 text-sm">{value}</p>
    </div>
  </div>
);
