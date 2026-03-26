import {
  Building2,
  Facebook,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Droplet,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
            <Link href="/" className="flex flex-col items-center md:items-start group">
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
              "Where comfort meets cleanliness and serenity."
              Providing premium residential spaces and high-fidelity branding solutions across South Africa.
            </p>
            <div className="flex space-x-3">
              <SocialIcon href="https://www.linkedin.com/company/letsheng-holdings">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/profile.php?id=100088899263799">
                <Facebook className="h-5 w-5" />
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
                <FooterLink href="/estates" icon={<Building2 className="h-4 w-4 mr-3 text-primary/60" />}>
                  Letsheng Estates
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/branding" icon={<Printer className="h-4 w-4 mr-3 text-primary/60" />}>
                  Letsheng Print & Brand
                </FooterLink>
              </li>
              <li className="flex items-center opacity-50">
                <Sparkles className="h-4 w-4 mr-3 text-gray-500" />
                <span className="text-sm text-gray-400 mr-2">Cleaning Solutions</span>
                <Badge variant="outline" className="text-[10px] px-1 py-0 border-gray-500 text-gray-500">Soon</Badge>
              </li>
              <li className="flex items-center opacity-50">
                <Droplet className="h-4 w-4 mr-3 text-gray-500" />
                <span className="text-sm text-gray-400 mr-2">Bulk Water Supply</span>
                <Badge variant="outline" className="text-[10px] px-1 py-0 border-gray-500 text-gray-500">Soon</Badge>
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
                <FooterLink href="/about" icon={<Info className="h-4 w-4 mr-3 text-primary/60" />}>
                  Our Story & Vision
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/contact" icon={<Phone className="h-4 w-4 mr-3 text-primary/60" />}>
                  Get in Touch
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/waterDetergents" icon={<ExternalLink className="h-4 w-4 mr-3 text-primary/60" />}>
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
                  1294 MAHAMBA STREET PHOLA, OGIES, MPUMALANGA 2233
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +27 83 753 5424 / +27 83 222 692
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">
                  kgotso@letshengholdings.co.za / elsie@letshengholdings.co.za
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} LETSHENG HOLDINGS (Pty) Ltd.
            Reg: 2023/123456/07. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}