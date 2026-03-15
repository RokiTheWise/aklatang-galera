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
  ctaLabel: string;
  className?: string;
  featured?: boolean;
}

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
  baseColorClass,
  bgImage,
  ctaLabel,
  className,
  featured = false,
}: MenuCardProps) {
  return (
    <Link href={href} className={cn("group block w-full h-full", className)}>
      <div
        className={cn(
          "relative h-full w-full overflow-hidden shadow-sm transition-all duration-500",
          "hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(13,38,69,0.15)] active:scale-[0.99]",
          featured ? "rounded-[2.5rem]" : "rounded-[2rem]",
        )}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Dynamic Color Overlay with Gradient for Depth */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            baseColorClass,
            featured
              ? "opacity-[0.82] group-hover:opacity-[0.75]"
              : "opacity-[0.85] group-hover:opacity-[0.78]",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2645]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Content */}
        <div
          className={cn(
            "relative z-20 h-full flex flex-col justify-between text-white",
            featured ? "p-8 md:p-10" : "p-7 md:p-8",
          )}
        >
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center self-start rounded-2xl bg-white/10 p-3.5 backdrop-blur-xl border border-white/10 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon
              size={featured ? 28 : 22}
              strokeWidth={2.5}
              className="drop-shadow-lg"
            />
          </div>

          <div>
            <h2
              className={cn(
                "font-black tracking-tight mb-2 leading-tight drop-shadow-sm transition-transform duration-500 group-hover:translate-x-1",
                featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "font-medium text-white/90 leading-relaxed mb-6 line-clamp-2 transition-all duration-500 group-hover:text-white group-hover:translate-x-1",
                featured ? "text-base max-w-xl" : "text-sm",
              )}
            >
              {description}
            </p>

            {/* CTA — Standardized with Portal Buttons */}
            <div
              className={cn(
                "inline-flex items-center gap-2 bg-white rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group-hover:gap-4",
                featured ? "px-7 py-3.5 text-xs" : "px-5 py-2.5 text-[10px]",
              )}
            >
              <span style={{ color: "#0d2645" }}>{ctaLabel}</span>
              <ArrowRight
                size={featured ? 14 : 12}
                style={{ color: "#0d2645" }}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </Link>
  );
}
