import {
  Building2,
  Facebook,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex items-center text-gray-300 hover:text-primary transition-colors group"
  >
    {icon}
    {children}
  </Link>
);

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactElement;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 px-4 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image
              src="/logo.jpg"
              alt="Letsheng Holdings Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold text-primary mb-2">
              LETSHENG HOLDINGS
            </h3>
            <p className="text-gray-300 text-sm text-center md:text-left">
              A premier holding company established in 2023, dedicated to
              superior residential property management and high-fidelity
              corporate branding solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Site Map
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink
                  href="/properties"
                  icon={
                    <Building2 className="h-5 w-5 mr-3 text-primary/60 group-hover:text-primary transition-colors" />
                  }
                >
                  Estates
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/branding"
                  icon={
                    <Printer className="h-5 w-5 mr-3 text-primary/60 group-hover:text-primary transition-colors" />
                  }
                >
                  Branding
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/about"
                  icon={
                    <Info className="h-5 w-5 mr-3 text-primary/60 group-hover:text-primary transition-colors" />
                  }
                >
                  About Us
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/contact"
                  icon={
                    <Phone className="h-5 w-5 mr-3 text-primary/60 group-hover:text-primary transition-colors" />
                  }
                >
                  Contact
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary/60 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  39 Mvubu Street, Soshanguve South, Pretoria, 0152
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary/60" />
                <span className="text-gray-300">
                  +27 76 348 9454 / +27 67 019 1941
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary/60 mt-1 flex-shrink-0" />
                <span className="text-gray-300 break-all">
                  info@letshengholdings.co.za
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Follow Our Journey
            </h3>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://www.linkedin.com/company/letsheng-holdings">
                <Linkedin className="h-6 w-6" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/profile.php?id=100088899263799">
                <Facebook className="h-6 w-6" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LETSHENG HOLDINGS (Pty) Ltd. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
