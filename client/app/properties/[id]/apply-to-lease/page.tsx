'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getPropertyById, submitLeaseApplication } from "../../actions";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leaseApplicationSchema, LeaseApplication } from "@/lib/validations/schemas";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Property } from "@/lib/validations/schemas";
import { useParams } from 'next/navigation';

function ApplyToLeaseForm({ propertyId, propertyTitle, propertyPrice }: { propertyId: string, propertyTitle: string, propertyPrice: number }) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<LeaseApplication>({
    resolver: zodResolver(leaseApplicationSchema),
    defaultValues: {
      property_id: propertyId,
    },
  });

  const onSubmit = async (data: LeaseApplication) => {
    const result = await submitLeaseApplication(data);
    if (result.success) {
      toast.success("Application submitted successfully!");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy">
          Apply to Lease
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          You are applying for the following property:
        </p>
        <h2 className="mt-4 text-2xl font-bold text-brand-navy">
          {propertyTitle}
        </h2>
        <p className="text-lg text-gray-600">
          Price: R{propertyPrice.toLocaleString()} / month
        </p>
      </div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Lease Application Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="applicant_name">Full Name</Label>
                <Input id="applicant_name" placeholder="Enter your full name" {...register("applicant_name")} />
                {errors.applicant_name && <p className="text-red-500 text-sm">{errors.applicant_name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="employment">Employment Status</Label>
                <Controller
                  name="employment"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.employment && <p className="text-red-500 text-sm">{errors.employment.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea id="message" placeholder="Tell us about yourself and your leasing needs" {...register("message")} />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ApplyToLeasePage() {
  const params = useParams();
  const id = params.id as string;
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProperty = async () => {
      const propertyData = await getPropertyById(id);
      setProperty(propertyData);
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return <ApplyToLeaseForm propertyId={property.id} propertyTitle={property.title} propertyPrice={property.price} />;
}
