import { Mail, MapPin, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessInfo } from "@/lib/business";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="animate-fade-in space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-secondary tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help. Whether you have a question about our services or
          want to discuss a partnership, we'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-secondary">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-secondary">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Our Office</h4>
                <p>{businessInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                {businessInfo.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                {businessInfo.emails.map((email) => (
                  <p key={email}>{email}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
