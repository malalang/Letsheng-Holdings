import {
  Building2,
  Facebook,
  Info,
  Linkedin,
  Phone,
  Printer,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    className="flex items-center text-gray-300 hover:text-brand-gold transition-colors group"
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
    className="text-gray-400 hover:text-brand-gold transition-colors"
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 -mx-4 md:-mx-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image
              src="/logo.jpg"
              alt="Letsheng Holdings Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg mb-4"
            />
            <h3 className="text-xl font-bold text-brand-gold mb-2">
              Letsheng Holdings
            </h3>
            <p className="text-gray-300 text-sm text-center md:text-left">
              A premier holding company dedicated to superior residential
              property management and high-fidelity corporate branding
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4">
              Site Map
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink
                  href="/properties"
                  icon={
                    <Building2 className="h-5 w-5 mr-3 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  }
                >
                  Estates
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/printing"
                  icon={
                    <Printer className="h-5 w-5 mr-3 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  }
                >
                  Printing
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/about"
                  icon={
                    <Info className="h-5 w-5 mr-3 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  }
                >
                  About Us
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/contact"
                  icon={
                    <Phone className="h-5 w-5 mr-3 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  }
                >
                  Contact
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span>Email:</span>{" "}
                <span className="text-gray-300">info@letsheng.co.za</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Phone:</span>{" "}
                <span className="text-gray-300">+27 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Office:</span>{" "}
                <span className="text-gray-300">Sandton, Johannesburg</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4">
              Follow Our Journey
            </h3>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="#">
                <Twitter className="h-6 w-6" />
              </SocialIcon>
              <SocialIcon href="#">
                <Linkedin className="h-6 w-6" />
              </SocialIcon>
              <SocialIcon href="#">
                <Facebook className="h-6 w-6" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-gold/20 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Letsheng Holdings (Pty) Ltd. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
