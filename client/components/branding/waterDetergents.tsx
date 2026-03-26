import { Droplet, Sparkles, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WaterDetergentsSpotlight() {
  return (
    <section className="container mx-auto px-6">
      <div className="relative overflow-hidden bg-secondary rounded-[3rem] border border-white/5 shadow-2xl">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/3 z-0" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side: Visual Split */}
          <div className="relative h-[400px] lg:h-[600px] group">
            <div className="absolute inset-4 z-20 flex flex-col justify-between pointer-events-none">
              <Badge className="w-fit bg-primary text-secondary font-bold px-4 py-1 self-end">
                New Division
              </Badge>
              <div className="bg-secondary/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <p className="text-white font-bold text-lg mb-1 italic">"Where cleanliness meets serenity"</p>
                <p className="text-gray-300 text-xs tracking-widest uppercase">The Letsheng Standard</p>
              </div>
            </div>
            
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial cleaning solutions and water supply"
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-16 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                Essential <span className="text-primary italic">Resources</span> <br />
                & Cleaning Solutions
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Expanding our commitment to quality through reliable bulk water distribution 
                and high-performance industrial detergents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Droplet className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Bulk Water</h4>
                  <p className="text-gray-500 text-xs">Potable & Industrial supply</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Detergents</h4>
                  <p className="text-gray-500 text-xs">High-fidelity cleaning gear</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Reliable Logistics</h4>
                  <p className="text-gray-500 text-xs">Nationwide distribution</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">SABS Quality</h4>
                  <p className="text-gray-500 text-xs">Safety & Trust guaranteed</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full px-10 font-bold group" asChild>
                <Link href="/waterDetergents">
                  View Solutions 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}