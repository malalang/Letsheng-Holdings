import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="animate-fade-in space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-brand-navy tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help. Whether you have a question about our services or want to discuss a partnership, we'd love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-brand-navy">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your Message" />
            </div>
            <Button size="lg" className="w-full font-bold">Send Message</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-brand-navy">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-brand-Blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Our Office</h4>
                <p>39 Mvubu Street, Soshanguve South, Pretoria, 0152</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-brand-Blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+27 76 348 9454</p>
                <p>+27 67 019 1941</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-brand-Blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>letshengholdings@gmail.com</p>
                <p>info@letshengholdings.co.za</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
