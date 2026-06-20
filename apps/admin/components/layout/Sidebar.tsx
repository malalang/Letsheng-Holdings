import {
  Archive,
  BookUser,
  Building2,
  Home,
  Package2,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-secondary text-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b border-primary/30 px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white"
          >
            <Image
              src="/logo.jpg"
              alt="Letsheng Holdings logo"
              width={32}
              height={32}
              className="size-8 rounded-full object-cover shadow-md"
              priority
            />
            <span>Letsheng Inc.</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <SidebarSection title="Core" />
            <SidebarLink href="/dashboard" icon={<Home className="h-4 w-4" />}>
              Dashboard
            </SidebarLink>

            <SidebarSection title="Operations" />
            <SidebarLink
              href="/dashboard/properties"
              icon={<Building2 className="h-4 w-4" />}
            >
              Estates
            </SidebarLink>
            <SidebarLink
              href="/dashboard/tenants"
              icon={<BookUser className="h-4 w-4" />}
            >
              Tenants
            </SidebarLink>
            <SidebarLink
              href="/dashboard/payments"
              icon={<Package2 className="h-4 w-4" />}
            >
              Payments
            </SidebarLink>
            <SidebarLink
              href="/dashboard/branding"
              icon={<ShoppingCart className="h-4 w-4" />}
            >
              Branding Shop
            </SidebarLink>

            <SidebarSection title="Admin" />
            <SidebarLink
              href="/dashboard/submissions"
              icon={<Archive className="h-4 w-4" />}
            >
              Submissions
            </SidebarLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

const SidebarSection = ({ title }: { title: string }) => (
  <h3 className="px-3 py-2 text-xs font-semibold uppercase text-primary/50 tracking-wider">
    {title}
  </h3>
);

const SidebarLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:text-white hover:bg-primary/20"
  >
    {icon}
    {children}
  </Link>
);

export default Sidebar;
