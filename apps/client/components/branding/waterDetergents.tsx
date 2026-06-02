import { Droplet, Sparkles, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WaterDetergentsSpotlight() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="relative overflow-hidden bg-secondary rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
        {/* Decorative Background Element - Hidden on mobile for cleaner look */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/3 z-0 hidden lg:block" />

        <div className="relative z-10 grid lg:grid-cols-2 items-stretch">
          {/* Image Side: Visual Split */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto group overflow-hidden">
            <div className="absolute inset-4 z-20 flex flex-col justify-between pointer-events-none">
              <Badge className="w-fit bg-primary text-secondary font-bold px-4 py-1 self-end shadow-lg">
                New Division
              </Badge>
              <div className="bg-secondary/60 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl transform group-hover:translate-y-[-5px] transition-transform duration-500 max-w-[280px] md:max-w-none">
                <p className="text-white font-bold text-base md:text-lg mb-1 italic">"Where cleanliness meets serenity"</p>
                <p className="text-gray-300 text-[10px] tracking-widest uppercase">The Letsheng Standard</p>
              </div>
            </div>
            
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial cleaning solutions and water supply"
              fill
              className="object-cover opacity-60 lg:opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Mobile Overlay: Darkens the bottom of the image for better text transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
            {/* Desktop Overlay: Side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent hidden lg:block" />
          </div>

          {/* Content Side */}
          <div className="p-6 sm:p-10 lg:p-16 space-y-8 flex flex-col justify-center">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                Essential <span className="text-primary italic">Resources</span> <br />
                <span className="lg:block">& Cleaning Solutions</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Expanding our commitment to quality through reliable bulk water distribution 
                and high-performance industrial detergents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: <Droplet />, title: "Bulk Water", desc: "Potable & Industrial" },
                { icon: <Sparkles />, title: "Detergents", desc: "High-fidelity gear" },
                { icon: <Truck />, title: "Logistics", desc: "Nationwide reach" },
                { icon: <ShieldCheck />, title: "SABS Quality", desc: "Safety guaranteed" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center lg:items-start p-3 lg:p-0 rounded-xl bg-white/5 lg:bg-transparent border border-white/5 lg:border-none">
                  <div className="p-3 bg-white/5 rounded-xl text-primary shrink-0">
                    {cloneElement(item.icon, { className: "h-5 w-5 md:h-6 md:w-6" })}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 font-bold group h-14" asChild>
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

// Helper to handle icon sizing in the map
import { cloneElement } from "react";