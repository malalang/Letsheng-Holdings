export type Tenant = {
  id: string;
  name: string;
  property: string;
  propertyId: string;
  status: "Active" | "Inactive" | "Pending";
  leaseEndDate: string;
  avatarUrl: string;
};

export type Payment = {
  id: string;
  tenantId: string;
  amount: number;
  date: string;
  status: "Paid" | "Pending" | "Late";
};

export const sampleTenants: Tenant[] = [
    {
        id: "tenant-001",
        name: "John Doe",
        property: "Executive Waterfront Residence",
        propertyId: "prop-001",
        status: "Active",
        leaseEndDate: "2024-12-31",
        avatarUrl: "/avatars/01.png",
    },
    {
        id: "tenant-002",
        name: "Jane Smith",
        property: "Penthouse in the Sky",
        propertyId: "prop-002",
        status: "Active",
        leaseEndDate: "2025-06-30",
        avatarUrl: "/avatars/02.png",
    },
    {
        id: "tenant-003",
        name: "Michael Johnson",
        property: "The Urban Oasis",
        propertyId: "prop-003",
        status: "Inactive",
        leaseEndDate: "2023-11-30",
        avatarUrl: "/avatars/03.png",
    },
    {
        id: "tenant-004",
        name: "Emily Davis",
        property: "Serene Suburban Sanctuary",
        propertyId: "prop-004",
        status: "Pending",
        leaseEndDate: "2024-08-31",
        avatarUrl: "/avatars/04.png",
    },
    {
        id: "tenant-005",
        name: "Chris Brown",
        property: "Modern Downtown Loft",
        propertyId: "prop-005",
        status: "Active",
        leaseEndDate: "2025-02-28",
        avatarUrl: "/avatars/05.png",
    },
];

export const samplePayments: Payment[] = [
  {
    id: "payment-001",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-03-01",
    status: "Paid",
  },
  {
    id: "payment-002",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-02-01",
    status: "Paid",
  },
  {
    id: "payment-003",
    tenantId: "tenant-001",
    amount: 1200,
    date: "2024-01-01",
    status: "Late",
  },
  {
    id: "payment-004",
    tenantId: "tenant-002",
    amount: 1500,
    date: "2024-03-05",
    status: "Paid",
  },
  {
    id: "payment-005",
    tenantId: "tenant-003",
    amount: 950,
    date: "2024-03-10",
    status: "Pending",
  },
];
