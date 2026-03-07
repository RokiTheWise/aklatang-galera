"use client";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MenuCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  baseColorClass: string;
  bgImage: string;
  buttonText: string;
  className?: string; // ← NEW: allows parent to control sizing/flex
}

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
  baseColorClass,
  bgImage,
  buttonText,
  className, // ← NEW
}: MenuCardProps) {
  return (
    // ← NEW: pass className here so parent can set flex-1, min-h-0, etc.
    <Link href={href} className={cn("group block w-full", className)}>
      {/* ← CHANGED: removed fixed heights, now uses h-full to fill whatever the Link gives it */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
        {/* Background Image with Zoom Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Color Overlay */}
        <div
          className={cn(
            "absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-80",
            baseColorClass,
          )}
        />

        {/* Content Layout */}
        <div className="relative z-20 p-8 h-full flex flex-col justify-between text-white">
          <div className="inline-flex items-center justify-center self-start rounded-2xl bg-white/20 p-3 backdrop-blur-md">
            <Icon size={28} strokeWidth={2} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-1 tracking-tight">{title}</h2>
            <p className="text-sm font-medium text-white/90 leading-snug mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              {buttonText} <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
