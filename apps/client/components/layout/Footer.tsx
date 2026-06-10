import {
  Building2,
  Droplet,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { businessInfo } from "@/lib/business";

const FooterLink = ({
  href,
  icon,
  children,
  isExternal = false,
}: {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  isExternal?: boolean;
}) => (
  <Link
    href={href}
    target={isExternal ? "_blank" : undefined}
    className="flex items-center text-gray-400 hover:text-primary transition-colors group text-sm"
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
    className="bg-white/5 p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-white/10 transition-all"
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 px-6 pb-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link
              href="/"
              className="flex flex-col items-center md:items-start group"
            >
              <div className="relative mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Letsheng Holdings Logo"
                  width={70}
                  height={70}
                  className="rounded-full shadow-2xl border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                />
              </div>
              <h3 className="text-xl font-black tracking-tighter text-white">
                LETSHENG<span className="text-primary"> HOLDINGS</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed max-w-xs">
              "{businessInfo.tagline}" {businessInfo.description}
            </p>
            <div className="flex space-x-3">
              <SocialIcon href={businessInfo.social.linkedin}>
                <FaLinkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={businessInfo.social.facebook}>
                <FaFacebook className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Business Divisions */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Our Divisions
            </h3>
            <ul className="space-y-4">
              <li>
                <FooterLink
                  href="/properties"
                  icon={<Building2 className="h-4 w-4 mr-3 text-primary/60" />}
                >
                  Letsheng Estates
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/branding"
                  icon={<Printer className="h-4 w-4 mr-3 text-primary/60" />}
                >
                  Letsheng Print & Brand
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/waterDetergents"
                  icon={<Droplet className="h-4 w-4 mr-3 text-primary/60" />}
                >
                  Water and Detergents
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <FooterLink
                  href="/about"
                  icon={<Info className="h-4 w-4 mr-3 text-primary/60" />}
                >
                  Our Story & Vision
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/contact"
                  icon={<Phone className="h-4 w-4 mr-3 text-primary/60" />}
                >
                  Get in Touch
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  href="/waterDetergents"
                  icon={
                    <ExternalLink className="h-4 w-4 mr-3 text-primary/60" />
                  }
                >
                  Water and Detergents
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {businessInfo.phones.join(" / ")}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  {businessInfo.emails.join(" / ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {businessInfo.legalName}. All
            Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
