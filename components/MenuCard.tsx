"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface MenuCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  baseColorClass: string;
  bgImage: string;
}

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
  baseColorClass,
  bgImage,
}: MenuCardProps) {
  return (
    <Link href={href} className="w-full">
      <div className="group relative flex h-80 w-full items-end overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Color Overlay - Semi-transparent by default, darker on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-85",
            baseColorClass,
          )}
        />

        {/* Content */}
        <div className="relative z-20 p-8 w-full text-white">
          <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3 backdrop-blur-md">
            <Icon size={32} strokeWidth={2} />
          </div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-sm font-medium text-white/90 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
